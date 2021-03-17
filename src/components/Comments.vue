<template>
  <div>
    <h4 class="text-weight-bold q-ma-none q-mb-xs">Comments</h4>
    <div class="row">
      <div class="col-8">
        <q-form
          @submit.prevent="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            outlined
            v-model="comment"
            label="Add a comment"
            lazy-rules
            autogrow
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <div class="q-mt-md">
            <q-btn label="Submit" type="submit" color="primary"/>
          </div>
        </q-form>
      </div>
    </div>

    <div class="row comments__container">
      <div class="col-7">
        <div class="row" v-for="(comment, index) in comments" :key="index">
          <div class="col-12">
            <p>{{ comment.userName }} at {{ comment.createdAt }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row q-mt-md justify-center">
      <div class="col-7">
        <q-btn 
          color="primary"
          class="full-width"
          label="Load comments"
          @click="loadComments"
          :loading="commentsLoading"
        />       
      </div>
    </div>


    
  </div>
</template>

<script>
import { firebase } from './../firebase/config.js';
import moment from 'moment';

export default {
  name: 'Comments',
  props: ['post'],
  data () {
    return {
      comment: '',
      commentsLoading: false,
      commentsPer: 1,
      commentsLastVisible: null,
      comments: [],
    }
  },
  mounted() {

  },
  methods: {
    onSubmit() {
      console.log(1);
    },
    async loadComments() {
      let db = firebase.firestore();
      this.commentsLoading = true;
      //first set of comments
      let comments = [];
      if( !this.comments.length ) {
        comments = await db.collection('comments')
          .where('postId', '==', this.post.id)
          .orderBy('createdAt', 'desc')
          .limit(this.commentsPer)
          .get();
      }else {
        //paginate
        comments = await db.collection('comments')
          .where('postId', '==', this.post.id)
          .orderBy('createdAt', 'desc')
          .startAfter(this.commentsLastVisible)
          .limit(this.commentsPer)
          .get();
      }
      //if there's still comments returned
      if( !comments.empty ) {
        //last comment for pagination
        this.commentsLastVisible = comments.docs[comments.docs.length-1];
        //
        comments = await comments.docs.map((doc, i, arr) => {
          let newDoc = doc.data();
          newDoc.createdAt = this.formattedCommentDate(newDoc.createdAt.toDate());
          return { ...newDoc }
        });
        this.comments.push(...comments);
      }
      this.commentsLoading = false;
    },  // loadComments()
    formattedCommentDate(date) {
      return moment(date).format('MMM DD, YYYY');
    }
  }
}
</script>

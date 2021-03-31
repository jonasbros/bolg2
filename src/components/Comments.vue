<template>
  <div>
    <h4 class="text-weight-bold q-ma-none q-mb-md">Comments</h4>
    <div class="row" v-if="isAuthUser">
      <div class="col-12">
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
            ref="commentInput"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <div class="q-mt-xs">
            <q-btn 
              label="Who asked?"
              type="submit"
              color="primary"
              :loading="submitCommentLoading"
              :disable="submitCommentLoading"
            />
          </div>
        </q-form>
      </div>
    </div>

    <div class="row comments__container q-mt-lg">
      <div class="col-12">
        <div class="row q-mb-md" v-for="(comment, index) in comments" :key="comment.id + index">
          <SingleComment :comment="comment" :post="post" />
        </div>
      </div>
    </div>

    <div class="row q-mt-md justify-center">
      <div class="col-8">
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
import { firebase, timestamp, isAuthUser } from './../firebase/config.js';
import moment from 'moment';

import SingleComment from './SingleComment.vue';

export default {
  name: 'Comments',
  props: ['post'],
  components: {
    SingleComment,
  },
  data () {
    return {
      comment: '',
      commentsLoading: false,
      commentsPer: 8,
      commentsLastVisible: null,
      comments: [],
      isAuthUser: null,
      postId: null,
      submitCommentLoading: false,
    }
  },
  created() {
    this.isAuthUser = this.$store.getters['example/getAuthUser'];
    this.postId = this.$route.params.id;
  },
  methods: {
    async onSubmit() {
      if( !this.isAuthUser ){
         console.log('No Login!'); 
         return;
      }

      let db = firebase.firestore();
      this.submitCommentLoading = true;
      let newCommentRes = await db.collection('comments')
      .add({
        userId: this.isAuthUser.uid,
        userName: this.isAuthUser.displayName,
        userPicture: this.isAuthUser.photoURL,
        postId: this.postId,
        body: this.comment,
        createdAt: timestamp(),
        replies: 0,
        likes: 0,
      });

      this.$refs.commentInput.resetValidation();
      this.comment = '';
      this.loadNewComment(newCommentRes.id);
      this.submitCommentLoading = false;
    },

    async loadNewComment(commentId) {
      let db = firebase.firestore();

      let newComment = await db.collection('comments')
        .doc(commentId)
        .get();
      //last item to startAt for pagination
      this.commentsLastVisible = newComment;
      //
      newComment = newComment.data();
      //format createdAt date
      newComment.createdAt = moment(newComment.createdAt.toDate()).format('MMM DD, YYYY HH:mm:ss a');
      //add new comment to top of array
      this.comments.unshift({ id: commentId, ...newComment });
      console.log(this.comments);
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
      //last comment for pagination
      this.commentsLastVisible = comments.docs[comments.docs.length-1];
      //
      comments = await comments.docs.map((doc, i, arr) => {
        let newDoc = doc.data();
        newDoc.createdAt = this.formattedCommentDate(newDoc.createdAt.toDate());
        return { id: doc.id, ...newDoc }
      });
      this.comments.push(...comments);
    
      this.commentsLoading = false;
    },  // loadComments()

    formattedCommentDate(date) {
      return moment(date).format('MMM DD, YYYY HH:mm:ss a');
    }
  }
}
</script>


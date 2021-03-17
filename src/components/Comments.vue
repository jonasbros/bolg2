<template>
  <div>
    <h4 class="text-weight-bold q-ma-none q-mb-md">Comments</h4>
    <div class="row">
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
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <div class="q-mt-xs">
            <q-btn label="Submit" type="submit" color="primary"/>
          </div>
        </q-form>
      </div>
    </div>

    <div class="row comments__container q-mt-lg">
      <div class="col-12">
        <div class="row q-mb-md" v-for="(comment, index) in comments" :key="index">
          <div class="col-12">
            <q-card flat bordered class="my-card bg-grey-1">
              <q-card-section style="padding-bottom: 0;">
                <div class="row items-center no-wrap">
                  <div class="col comment__user-info">
                    <img :src="comment.userPicture" :alt="comment.userName">
                    <div>
                      <div class="text-weight-bold">{{ comment.userName }}</div>
                      <div class="text-caption">{{ comment.createdAt }}</div>
                    </div>
                  </div>

                  <div class="col-auto">
                    <q-btn color="grey-7" round flat icon="more_vert">
                      <q-menu cover auto-close>
                        <q-list>
                          <q-item clickable>
                            <q-item-section>Delete Comment</q-item-section>
                          </q-item>
                          <q-item clickable>
                            <q-item-section>Report Comment</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </div>
                </div>
              </q-card-section>

              <q-card-section>
                {{ comment.body }}
              </q-card-section>

              <q-card-section 
                class="text-right text-grey-7"
                style="padding-top: 0;"
              >
                <span class="text-subtitle2 q-mr-sm">{{ comment.likes }} likes</span>
                <span class="text-subtitle2">{{ comment.replies }} replies</span>
              </q-card-section>

              <q-separator />

              <q-card-actions class="justify-around">
                <q-item clickable class="col-4">
                  <q-item-section avatar>
                    <q-icon color="primary" name="far fa-thumbs-up" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Like</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable class="col-4">
                  <q-item-section avatar>
                    <q-icon color="primary" name="far fa-comment-alt" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Comment</q-item-label>
                  </q-item-section>
                </q-item>
              </q-card-actions>
            </q-card>
          </div>
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
import { firebase } from './../firebase/config.js';
import moment from 'moment';

export default {
  name: 'Comments',
  props: ['post'],
  data () {
    return {
      comment: '',
      commentsLoading: false,
      commentsPer: 8,
      commentsLastVisible: null,
      comments: [],
      currentUser: [],
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
      //push only if not empty
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

<style lang="scss">
  .comment__user-info {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    img {
      height: 50px;
      width: 50px;
      border-radius: 69%;
      margin-right: 8px;
    }
  }
</style>
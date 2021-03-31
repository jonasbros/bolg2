<template>
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
        <span class="text-subtitle2 q-mr-sm">{{ likes }} likes</span>
<<<<<<< HEAD
<<<<<<< HEAD
        <span class="text-subtitle2">{{ replies }} replies</span>
=======
=======
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
        <span class="text-subtitle2">{{ comment.replies }} replies</span>
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
      </q-card-section>

      <q-separator v-if="isAuthUser" />

      <q-card-actions class="justify-around" v-if="isAuthUser">
        <CommentLikes :comment="comment" @updateCommentLikesCount="updateCommentLikesCount"/>

        <q-item clickable class="col-4" @click="isActiveReply = !isActiveReply">
          <q-item-section avatar>
            <q-icon color="primary" name="far fa-comment-alt" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              Reply
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-actions>

      <q-card-section 
        class="text-grey-7"
        style="padding-top: 0;"
        v-show="isActiveReply"
      >
        <Reply 
          :comment="comment"
          :user="isAuthUser" 
          @updateCommentRepliesCount="updateCommentRepliesCount"
        />
      </q-card-section>
    </q-card>
    
  </div>
</template>

<script>
import { firebase } from './../firebase/config.js';
import CommentLikes from './CommentLikes.vue';
<<<<<<< HEAD
<<<<<<< HEAD
import Reply from './Reply.vue';
=======
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
=======
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72

export default {
  name: 'SingleComponent',
  props: ['comment'],
  components: {
    CommentLikes,
<<<<<<< HEAD
<<<<<<< HEAD
    Reply,
=======
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
=======
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
  },
  data() {
    return {
      likes: 0,
<<<<<<< HEAD
<<<<<<< HEAD
      replies: 0,
      isAuthUser: null,
      isActiveReply: false,
=======
      isAuthUser: null,
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
=======
      isAuthUser: null,
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
    }
  },
  mounted() {
    this.likes = this.comment.likes;
<<<<<<< HEAD
<<<<<<< HEAD
    this.replies = this.comment.replies;

=======
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
=======
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
    this.isAuthUser = this.$store.getters['example/getAuthUser'];
  },
  methods: {
    updateCommentLikesCount(newLikesCount) {
      this.likes = newLikesCount;
<<<<<<< HEAD
<<<<<<< HEAD
    },
    updateCommentRepliesCount(newRepliesCount) {
      this.replies = newRepliesCount;
      this.isActiveReply = false;
=======
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
=======
>>>>>>> 701ed2d5723bbf5958ec650cd612b4aa6cbb7b72
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
      height: 42px;
      width: 42px;
      border-radius: 69%;
      margin-right: 8px;
    }
  }
</style>
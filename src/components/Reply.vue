<template>
  <q-form
    @submit.prevent="onSubmit"
    class="q-gutter-md"
  >
    <q-input
      outlined
      color="secondary"
      v-model="reply"
      label="Add a reply"
      lazy-rules
      autogrow
      ref="replyInput"
      :rules="[ val => val && val.length > 0 || 'Please type something']"
    />

    <q-btn 
      label="Submit"
      type="submit"
      color="secondary"
      :loading="submitReplyLoading"
      :disable="submitReplyLoading"
    />
  </q-form>
</template>

<script>
import { firebase, timestamp } from './../firebase/config.js';
import moment from 'moment';

export default {
  name: 'Reply',
  props: [
    'comment',
    'user',
  ],
  data () {
    return {
      reply: '',
      repliesCount: 0,
      submitReplyLoading: false,
    }
  },

  mounted() {
    console.log(this.comment);
    this.repliesCount = this.comment.replies;
  },

  methods: {
    async onSubmit() {
      let db = firebase.firestore();

      this.submitReplyLoading = true;

      let newReply = await db.collection('comments')
      .doc(this.comment.id)
      .collection('replies')
      .add({
        userName: this.user.displayName,
        userId: this.user.uid,
        userPicture: this.user.photoURL,
        body: this.reply,
        createdAt: timestamp(),
      });

      await db.collection('comments')
      .doc(this.comment.id)
      .update({
        replies: this.repliesCount + 1,
      });

      this.repliesCount++;
      this.reply = '';

      this.$emit('updateCommentRepliesCount', this.repliesCount);
      this.loadNewReply(newReply.id);
      this.submitReplyLoading = false;

    }, //onSubmit() 

    async loadNewReply(replyId) {
      let db = firebase.firestore();

      let newReply = await db.collection('comments')
        .doc(this.comment.id)
        .collection('replies')
        .doc(replyId)
        .get();
      //last item to startAt for pagination
      this.commentsLastVisible = newReply;
      //
      newReply = newReply.data();
      //format createdAt date
      newReply.createdAt = moment(newReply.createdAt.toDate()).format('MMM DD, YYYY HH:mm:ss a');
      //add new comment to top of array
      this.$emit('appendNewReply', { id: replyId, ...newReply });
      console.log(this.comments);
    },
  }
}
</script>

<template>
  <q-form
    @submit.prevent="onSubmit"
    class="q-gutter-md"
  >
    <q-input
      outlined
      v-model="reply"
      label="Add a reply"
      lazy-rules
      autogrow
      ref="replyInput"
      :rules="[ val => val && val.length > 0 || 'Please type something']"
    />

    <q-btn 
      label="Who asked?"
      type="submit"
      color="primary"
      :loading="submitReplyLoading"
      :disable="submitReplyLoading"
    />
  </q-form>
</template>

<script>
import { firebase, timestamp } from './../firebase/config.js';

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

      await db.collection('comments')
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

      this.submitReplyLoading = false;

    }, //onSubmit() 
  }
}
</script>

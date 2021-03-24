<template>
  <div>
    <q-btn 
      flat 
      round 
      color="primary" 
      icon="far fa-thumbs-up"
      style="font-size: 0.75rem"
      v-if="!isLiked && isAuthUser"
      @click="likeHandler"
    />

    <q-btn 
      flat 
      round 
      color="primary" 
      icon="fas fa-thumbs-up"
      style="font-size: 0.75rem"
      v-if="isLiked && isAuthUser"
      @click="likeHandler"
    />

    <span>
      {{ likes }} Likes
    </span>
  </div>
</template>

<script>
import { debounce } from 'quasar';
import { firebase } from './../firebase/config.js';

export default {
  name: 'Likes',
  props: [
    'post',
  ],
  data () {
    return {
      likes: 0,
      isLiked: false,
      isAuthUser: false,
      authUserInfo: [],
    }
  },
  mounted() {
    this.authUserInfo = this.$store.getters['example/getAuthUser'];    

    this.isAuthUser = this.authUserInfo;

    this.likes = this.post.likes;
  },
  methods: {
    likeHandler: debounce(async function() {
      let db = firebase.firestore();

      console.log(this);
      let { uid, displayName, photoURL } = this.authUserInfo;

      let newLikesCount = this.likes + 1;

      let likes = await db.collection('likes').add({
        userId: uid,
        userName: displayName,
        photoURL: photoURL,
        postId: this.post.id,
      });
    
      await db.collection('posts')
      .doc(this.post.id)
      .update({
        likes: newLikesCount,
      })
      .then(() => {
        this.likes++;
      })
      .catch((err) => {
        console.log(err);
      });
    }, 300),
    isUserLikedPost() {

    }
  }
}
</script>
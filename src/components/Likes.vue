<template>
  <div>
    <q-btn 
      flat 
      round 
      color="primary" 
      icon="far fa-thumbs-up"
      style="font-size: 0.75rem"
      v-show="!isLiked && isAuthUser"
      @click="likeHandler"
    />

    <q-btn 
      flat 
      round 
      color="primary" 
      icon="fas fa-thumbs-up"
      style="font-size: 0.75rem"
      v-show="isLiked && isAuthUser"
      @click="unlikeHandler"
    />

    <span>
      {{ likes }} likes
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
      userLikeId: '',
    }
  },
  mounted() {
    this.authUserInfo = this.$store.getters['example/getAuthUser'];    

    this.isAuthUser = this.authUserInfo;
    this.likes = this.post.likes;
    this.isUserLikedPost();
  },
  methods: {
    unlikeHandler: debounce(async function() {
      if( !this.isLiked || !this.isAuthUser ) return;

      let db = firebase.firestore();

      let newLikesCount = this.likes - 1;

      let likes = await db.collection('likes')
        .doc(this.userLikeId)
        .delete();
    
      await db.collection('posts')
      .doc(this.post.id)
      .update({
        likes: newLikesCount,
      })
      .then(() => {
        this.likes--;
        this.isLiked = false;
      })
      .catch((err) => {
        console.log(err);
      });  
    }, 300), // unlikeHandler()
    
    likeHandler: debounce(async function() {
      if( this.isLiked || !this.isAuthUser ) return;

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

      this.userLikeId = await likes.id;
    
      await db.collection('posts')
      .doc(this.post.id)
      .update({
        likes: newLikesCount,
      })
      .then(() => {
        this.likes++;
        this.isLiked = true;
      })
      .catch((err) => {
        console.log(err);
      });
    }, 300),  // unlikeHandler()

    async isUserLikedPost() {
      let db = firebase.firestore();
      
      let userLikedPosts = await db.collection('likes')
        .where('userId', '==', this.isAuthUser.uid)
        .where('postId', '==', this.post.id)
        .get();

      if( await !userLikedPosts.empty ) {
        this.userLikeId = userLikedPosts.docs[0].id;
        this.isLiked = true;
      }
    }
  }
}
</script>
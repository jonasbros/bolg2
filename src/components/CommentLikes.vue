<template>
  <div>
    <q-item clickable class="col-4" @click="likeHandler" v-show="!isLiked">
      <q-item-section avatar>
        <q-icon color="primary" name="far fa-thumbs-up" />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          Like
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable class="col-4" @click="unlikeHandler" v-show="isLiked">
      <q-item-section avatar>
        <q-icon color="primary" name="fas fa-thumbs-up" />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          Like
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { firebase } from './../firebase/config.js';
import { debounce } from 'quasar';

export default {
  name: 'CommentLikes',
  props: ['comment'],
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
    console.log(this.comment);
    this.authUserInfo = this.$store.getters['example/getAuthUser'];  
    this.likes = this.comment.likes;
    this.isAuthUser = this.authUserInfo;
    this.isUserLikedPost();
  },
  methods: {
    likeHandler: debounce(async function() {
      if( this.isLiked || !this.isAuthUser ) return;

      let db = firebase.firestore();

      let { uid, displayName, photoURL } = this.authUserInfo;

      let newLikesCount = this.likes + 1;

      let likes = await db.collection('comments')
        .doc(this.comment.id)
        .collection('likes')
        .add({
          userId: uid,
          userName: displayName,
          photoURL: photoURL,
        });

      this.userLikeId = await likes.id;
    
      await db.collection('comments')
        .doc(this.comment.id)
        .update({
          likes: newLikesCount,
        })
        .then(() => {
          this.likes++;
          this.$emit('updateCommentLikesCount', this.likes);

          this.isLiked = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }, 300), // likeHandler()

    unlikeHandler: debounce(async function() {
      if( !this.isLiked || !this.isAuthUser ) return;

      let db = firebase.firestore();

      let newLikesCount = this.likes - 1;

      let likes = await db.collection('comments')
        .doc(this.comment.id)
        .collection('likes')
        .doc(this.userLikeId)
        .delete();
    
      await db.collection('comments')
        .doc(this.comment.id)
        .update({
          likes: newLikesCount,
        })
        .then(() => {
          this.likes--;
          this.$emit('updateCommentLikesCount', this.likes);

          this.isLiked = false;
        })
        .catch((err) => {
          console.log(err);
        });  
    }, 300), // unlikeHandler()    

    async isUserLikedPost() {
      let db = firebase.firestore();
      
      let userLikedPosts = await db.collection('comments')
        .doc(this.comment.id)
        .collection('likes')
        .where('userId', '==', this.isAuthUser.uid)
        .get();

      if( await !userLikedPosts.empty ) {
        this.userLikeId = userLikedPosts.docs[0].id;
        this.isLiked = true;
      }
    }, // isUserLikedPost()


  } // methods
}
</script>

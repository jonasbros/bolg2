<template>
  <q-page padding class="flex items-center justify-center">
    <!-- <h1 class="text-weight-bold text-h2">Welcome to Bolg</h1> -->
    <q-btn 
    color="secondary"
    size="lg"
    icon="fab fa-google"
    label="Sign in with Google"
    @click="signInWithGoogle"
    />
    
  </q-page>
</template>

<script>
import { googleProvider, firebase } from './../firebase/config.js';

export default {
  name: 'Login',
  data() {
    return {
      user: [],
      isAuthUser: null,
    }    
  },
  async mounted() {
    //if user auth
    this.isAuthUser = this.$store.getters['example/getAuthUser'];
    if( this.isAuthUser ) {
      this.$router.push({ name: 'Home' });     
    }

  },
  methods: {
    async signInWithGoogle() {
      let db = firebase.firestore();
      let result = await firebase.auth().signInWithPopup(googleProvider);
      
      let { uid, displayName, email, photoURL } = await result.user;

      this.user = {
        uid: uid,
        displayName: displayName,
        email: email,
        photoURL: photoURL,
      };
      //save to userinfo to db
      let user = await db.collection('users').doc(this.user.uid).get();
      if( !user.exists ) {
        await db.collection('users').doc(this.user.uid).set(this.user);
      }
      this.$router.push({ name: 'Home' });     
    }
  }
}
</script>

<template>
  <q-page padding class="text-center">
    <h1>Login</h1>
    <q-btn color="primary" icon="fab fa-google" label="Sign in with Google" @click="signInWithGoogle"/>
  </q-page>
</template>

<script>
import { googleProvider, firebase } from './../firebase/config.js';

export default {
  name: 'Login',
  data() {
    return {
      user: []
    }    
  },
  mounted() {
    if( firebase.auth().currentUser ) {
      this.$router.push({ name: 'Home' });     
    }
  },
  methods: {
    async signInWithGoogle() {
      let db = firebase.firestore();
      let result = await firebase.auth().signInWithPopup(googleProvider);
      
      this.user = await result.user;

      this.$store.commit('example/storeUser', {
        uid: this.user.uid,
        displayName: this.user.displayName,
        email: this.user.email,
        photoURL: this.user.photoURL,
      });

      let user = await db.collection('users').doc(this.user.uid).get();
      if( !user.exists ) {
        db.collection('users').doc(this.user.uid).set({...this.user});
      }
      this.$router.push({ name: 'Home' });     
    }
  }
}
</script>

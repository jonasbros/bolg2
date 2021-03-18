<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { firebase, isAuthUser } from './firebase/config.js';

export default {
  name: 'App',
  async mounted() {
    let test = await isAuthUser();
    console.log(window.localStorage);
    //await this.$store.commit('example/storeUser', this.user);   
  }
}
</script>

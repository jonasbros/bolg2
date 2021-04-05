<template>
  <q-layout view="lHh Lpr lFf">
    <Nav :isAuthUser="isAuthUser" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { firebase } from './../firebase/config.js';
import Nav from './../components/Nav.vue';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      isAuthUser: null,
    }
  },
  created() {
    this.isAuthUser = this.$store.getters['example/getAuthUser'];
    console.log('main', this.isAuthUser);
  },

}
</script>

<style lang="scss">
  .q-toolbar {
    min-height: 60px;
  }

  .q-tab {
    min-height: 60px;
  }
</style>

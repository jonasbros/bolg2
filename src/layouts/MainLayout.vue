<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="justify-start">
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>

        <q-toolbar-title class="text-weight-bold" shrink>BOLG</q-toolbar-title>
      
        <Search />

        <q-space />
        
        <q-tabs v-model="tab">
          <q-route-tab 
            name="blogs"
            label="Posts"
            :ripple="false"
            :to="{ name: 'Home' }" 
          />

          <q-route-tab
            name="newpost"
            label="New Post"
            :ripple="false"
            :to="{ name: 'New Post' }" 
          />
        </q-tabs>

        <q-btn
          v-if="isAuthUser"
          flat 
          dense 
          icon="logout" 
          label="Logout" 
          @click="logout"
        />

        <q-btn
          v-else
          flat 
          dense
          icon="login"
          label="Login"
          :to="{ name: 'Login' }" 
        />
      </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { firebase } from './../firebase/config.js';
import Search from './../components/Search.vue';

export default {
  components: {
    Search,
  },
  data() {
    return {
      tab: 'blogs',
      isAuthUser: null,
    }
  },
  created() {
    this.isAuthUser = this.$store.getters['example/getAuthUser'];
    console.log('main', this.isAuthUser);
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$store.dispatch('example/deleteUserAction');
        this.$router.push({ name: 'Login' });
      }).catch((error) => {
        console.log(error);
      });
    },
  }
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

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>

        <q-toolbar-title class="text-weight-bold">BOLG</q-toolbar-title>
      
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

      <q-tabs v-model="tab">
        <q-route-tab 
          name="blogs"
          label="Posts"
          :to="{ name: 'Home' }" 
        />

        <q-route-tab
          name="newpost"
          label="New Post"
          :to="{ name: 'New Post' }" 
          v-if="isAuthUser"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { firebase } from './../firebase/config.js';

export default {
  data() {
    return {
      tab: 'blogs',
      isAuthUser: null,
    }
  },
  mounted() {
    this.isAuthUser = this.$store.getters['example/getAuthUser'];
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Login' });
      }).catch((error) => {
        console.log(error);
      });
    },
  }
}
</script>

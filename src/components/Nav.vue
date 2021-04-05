<template>
  <q-header elevated>
    <q-toolbar class="justify-start">
      <q-avatar>
        <q-icon 
        name="fas fa-feather-alt"
        style="font-size: 1.45em;"
        color="secondary"
        />

      </q-avatar>

      <q-toolbar-title 
      class="text-weight-bold"
      shrink
      >
        <router-link
        :to="{ name: 'Home' }"
        class="text-secondary"
        >
          BOLG
        </router-link>        
      </q-toolbar-title>

      <Search />

      <q-space />
      
      <q-tabs v-model="tab">
        <q-route-tab 
          name="blogs"
          label="Posts"
          class="text-secondary"
          :ripple="false"
          :to="{ name: 'Home' }" 
        />

        <q-route-tab
          name="newpost"
          label="New Post"
          class="text-secondary"
          :ripple="false"
          :to="{ name: 'New Post' }" 
        />
      </q-tabs>

      <q-btn
        v-if="isAuthUser && !fromLoginLayout"
        flat 
        dense 
        class="text-secondary"
        icon="logout" 
        label="Logout" 
        @click="logout"
      />

      <q-btn
        v-if="!isAuthUser && !fromLoginLayout"
        flat 
        dense
        class="text-secondary"
        icon="login"
        label="Login"
        :to="{ name: 'Login' }" 
      />
    </q-toolbar>

  </q-header>
</template>

<script>
import { firebase } from './../firebase/config.js';
import Search from './Search.vue';

export default {
  name: 'Nav',
  props: {
    isAuthUser: [Object],
    fromLoginLayout: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Search,
  },
  data () {
    return {
      tab: 'blogs',
    }
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

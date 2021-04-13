<template>
  <q-layout view="lHh Lpr lFf">
    <Nav 
      :isAuthUser="isAuthUser"
      @openDrawer="drawer = true"
      @logout="logout"
    />

    <DrawerNav 
      :isAuthUser="isAuthUser"
      v-model="drawer" 
      @drawer="drawer = false" 
      @logout="logout"
    />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { firebase } from './../firebase/config.js';
import Nav from './../components/Nav.vue';
import Search from './../components/Search.vue';
import DrawerNav from './../components/DrawerNav.vue';

export default {
  components: {
    Nav,
    Search,
    DrawerNav,
  },
  data() {
    return {
      isAuthUser: null,
      drawer: false,
      menuList: [
        {
          icon: 'inbox',
          label: 'Inbox',
          separator: true
        },
      ],

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
  .mobile__search {
    margin: 0 auto;
    font-size: 2rem;
    width: 80% !important;
  }

  .q-drawer__backdrop {
    display: none;
  }
</style>
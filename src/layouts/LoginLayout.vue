<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <Nav 
      :isAuthUser="null"
      :fromLoginLayout="true"
      @openDrawer="drawer = true"
    />

    <DrawerNav 
      :isAuthUser="null"
      :fromLoginLayout="true"
      v-model="drawer" 
      @drawer="drawer = false" 
    />    

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Search from './../components/Search.vue';
import Nav from './../components/Nav.vue';
import DrawerNav from './../components/DrawerNav.vue';

export default {
  name: 'LoginLayout',
  components: { 
    Search,
    Nav,
    DrawerNav,
  },
  data () {
    return {
      drawer: false,
      tab: 'login',
    }
  }
}
</script>

<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <Nav :isAuthUser="null" :fromLoginLayout="true"/>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Search from './../components/Search.vue';
import Nav from './../components/Nav.vue';

export default {
  name: 'LoginLayout',
  components: { 
    Search,
    Nav,
  },
  data () {
    return {
      tab: 'login',
    }
  }
}
</script>

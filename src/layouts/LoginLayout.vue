<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
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
      </q-toolbar>

    </q-header>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      tab: 'login',
    }
  }
}
</script>

<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>

        <q-toolbar-title class="text-weight-bold">BOLG</q-toolbar-title>
        </q-toolbar>

      <q-tabs v-model="tab">
        <q-tab name="blogs" label="Blogs" />
        <q-tab name="login" label="Login" />
      </q-tabs>
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

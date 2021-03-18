<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { firebase, isAuthUser } from './firebase/config.js';

export default {
  name: 'App',
}
</script>

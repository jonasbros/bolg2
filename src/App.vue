<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return { 
      isAuthUser: null
    }
  },
  created() {
    this.isAuthUser = this.$store.getters['example/getAuthUser'];
  },  
}
</script>

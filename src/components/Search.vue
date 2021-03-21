<template>
  <q-input
    v-model="search"
    debounce="500"
    placeholder="Search"
    dark
    dense
    standout
    style="width: 350px;"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { firebase } from './../firebase/config.js';

export default {
  name: 'Search',
  data () {
    return {
      search: '',
    }
  },
  watch: {
    search(nV, oV) {
      let db = firebase.firestore();
      db.collection('posts');
      
    }
  },
}
</script>

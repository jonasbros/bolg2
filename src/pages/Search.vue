<template>
  <q-page padding>
    <div class="row justify-center text-center">
      <div class="col-7">
        <h1 v-if="posts.length" class="text-weight-bold text-h4">Search results for: {{ term | badwordsFilter }}</h1>
        <h1 v-else class="text-weight-bold text-h4">No posts found for: {{ term | badwordsFilter }}</h1>
      </div>
    </div>
   
    <div class="row justify-center text-center" v-for="(post, index) in posts" :key="new Date().getTime() + index">
      <div class="col-7">
        <Blogs :blog="post"/>
        <hr>
      </div>
    </div>
  </q-page>
</template>

<script>
import { firebase } from './../firebase/config.js';

import Blogs from './../components/Blogs.vue';

export default {
  name: 'Search',
  props: ['term'],
  components: {
    Blogs,
  },
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.getSearchItems();
  },
  methods: {
    async getSearchItems() {
      this.$q.loading.show();    

      let db = firebase.firestore();
      let termToArray = this.term.trim().split(" ");
      
      console.log(termToArray);

      let results = await db.collection('posts')
      .where('keywords', 'array-contains-any', termToArray)
      .orderBy('createdAt', 'desc')
      .get();

      this.posts = results.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });

      this.$q.loading.hide();
    }
  }
}
</script>

<template>
  <q-page padding>
    <div class="row justify-center text-center">
      <div class="col-7">
        <h1 class="text-weight-bold text-h2">Bolg posts</h1>
      </div>
    </div>
    
    <div class="row justify-center text-center" v-for="(blog, index) in blogs" :key="index">
      <div class="col-7">
        <Blogs :blog="blog"/>
        <hr>
      </div>
    </div>
  </q-page>
</template>

<script>
import { firebase } from './../firebase/config.js';

import Blogs from './../components/Blogs.vue';

export default {
  name: 'PageIndex',
  components: {
    Blogs,
  },
  data() {
    return {
      blogs: []
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.$q.loading.show();    

      let db = firebase.firestore();
      //fetch posts
      let res = await db.collection('posts')
        .orderBy('createdAt', 'desc')
        .get();

      this.blogs = res.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });

      this.$q.loading.hide();
    },
  }
}
</script>

<template>
  <q-page padding>
    <div class="row justify-center text-center">
      <div class="col-7">
        <h1 v-if="posts.length" class="text-weight-bold text-h4">Posts with tag: {{ tag }}</h1>
        <h1 v-else class="text-weight-bold text-h4">No posts found with tag: {{ tag }}</h1>
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
import Blogs from './../components/Blogs.vue';
import { firebase } from './../firebase/config.js';

export default {
  name: 'Tag',
  props: ['tag'],
  components: {
    Blogs,
  },
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.getTagItems();
  },
  methods: {
    async getTagItems() {
      this.$q.loading.show();    

      let db = firebase.firestore();

      console.log('tag- ', this.tag);
      
      let results = await db.collection('posts')
      .where('tags', 'array-contains', this.tag)
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

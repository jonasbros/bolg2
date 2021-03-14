<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <blogs v-for="(blog, index) in blogs" :key="index" :blog="blog"/>
    </div>
  </q-page>
</template>

<script>
import { firebase } from './../firebase/config.js';

import blogs from './../components/Blogs.vue';

export default {
  name: 'PageIndex',
  components: {
    blogs,
  },
  data() {
    return {
      blogs: []
    }
  },
  created() {
    let user = firebase.auth().currentUser;
    if( !user ) {
      this.$router.push({ name: 'Login' })
    }

    this.getPosts();
  },
  methods: {
    async getPosts() {
      let db = firebase.firestore();
      
      let res = await db.collection('posts').get();

      this.blogs = res.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });

      console.log(this.blogs);
    },
  }
}
</script>

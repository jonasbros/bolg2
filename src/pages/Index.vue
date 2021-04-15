<template>
  <q-page padding ref="postContainer" style="min-height: 768px;">

    <q-infinite-scroll 
    @load="loadPostsNextPage"
    debounce="350"
    :offset="100"
    >

      <div class="row justify-center text-center" v-for="(blog, index) in blogs" :key="blog.id + index">
        <div class="col-lg-6 col-md-7 col-sm-10 col-xs-12">
          <Blogs :blog="blog"/>
          <hr>
        </div>
      </div>

      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="secondary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>

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
      blogs: [],
      lastVisiblePost: null,
      postPerPage: 8,
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
        .limit(this.postPerPage)
        .get();

      this.lastVisiblePost = res.docs[this.postPerPage - 1];

      this.blogs = res.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });

      this.$q.loading.hide();
    }, //getPosts()

    async loadPostsNextPage(index, done) {
      if( !this.lastVisiblePost ) {
        done();
        return;
      }
      //pagination
      let db = firebase.firestore();
      let nextPage = await db.collection('posts')
        .orderBy('createdAt', 'desc')
        .startAfter(this.lastVisiblePost)
        .limit(this.postPerPage)
        .get();

      this.lastVisiblePost = nextPage.docs[this.postPerPage - 1];

      nextPage = nextPage.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });

      this.blogs.push(...nextPage);
      done();
    }
  }
}
</script>

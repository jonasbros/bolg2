<template>
  <div class="blog__container q-pa-md text-left">
    <div q-pa-md>
      <router-link 
        :to="{ 
          name: 'Post', 
          params: { 
            id: blog.id,
            slug: blog.slug
          } 
        }
      ">
        <span class="text-weight-bold text-h3 text-black">{{ truncateText(blog.title, truncateTitleCount) }}</span>
      </router-link>

      <p>{{ truncateText(blog.excerpt, truncateExcerptCount) }}</p>
      
      <p>By <strong>{{ blog.userName }}</strong> at {{ formattedPostDate }}</p>
      
      <div class="row  items-center">
        <div class="col-6">
          <div class="row nowrap items-center">
            <Likes :post="blog"/>
            <div class="q-ml-lg">
              <q-icon
                color="secondary"
                name="far fa-comment-alt"
                size="1.5em"
                class="q-mr-sm"
              />

              <span>
                {{ commentsCount }} comments
              </span>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="row justify-end">
            <q-chip color="secondary" v-for="(tag, index) in blog.tags" :key="index">
              <router-link class="text-white" :to="{ name: 'Tag', params: { tag: tag } }">
                #{{tag}}
              </router-link>
            </q-chip>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import moment from 'moment';
import truncate from 'lodash.truncate';
import Likes from './../components/Likes.vue';
import { firebase } from './../firebase/config.js';


export default {
  name: 'Blogs',
  props: ['blog'],
  components: {
    Likes,
  },
  data() {
    return {
      truncateTitleCount: 12,
      truncateExcerptCount: 45,
      commentsCount: 0,
    }
  },
  computed: {
    formattedPostDate() {
      return moment(this.blog.createdAt.toDate()).format('MMM DD, YYYY HH:mm:ss a');
    },
  },
  mounted() {
    this.getCommentsCount();
  },
  methods: {
    async getCommentsCount() {
      let db = firebase.firestore();
      
      let comments = await db.collection('comments')
      .where('postId', '==', this.blog.id)
      .get();

      this.commentsCount = await comments.docs.length;
    },
    truncateText(text, wordCount) {
      let splitText = text.split(" ");
      let thWord = splitText[wordCount - 1];
      let truncateLength = text.search(thWord);

      if( splitText.length < wordCount ) return text;

      return truncate(
        text,
        { 
          length: truncateLength,
          separator: ' '
        });
    }
  },
}
</script>

<style lang="scss">
// .blog__container {
//   background: pink;
// }
</style>

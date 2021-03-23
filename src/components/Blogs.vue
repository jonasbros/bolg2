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
        <span class="text-weight-bold text-h3">{{ truncateText(blog.title, truncateTitleCount) }}</span>
      </router-link>

      <p>{{ truncateText(blog.excerpt, truncateExcerptCount) }}</p>
      
      <p>By <strong>{{ blog.userName }}</strong> at {{ formattedPostDate }}</p>
      
      <div class="row">
        <div class="col-6">
          <Likes/>
        </div>

        <div class="col-6">
          <div class="row justify-end">
            <q-chip v-for="(tag, index) in blog.tags" :key="index">
              <router-link :to="{ name: 'Tag', params: { tag: tag } }">
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
    }
  },
  computed: {
    formattedPostDate() {
      return moment(this.blog.createdAt.toDate()).format('MMM DD, YYYY HH:mm:ss a');
    },
  },
  methods: {
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

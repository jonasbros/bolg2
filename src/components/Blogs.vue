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
      <p>By <strong>{{ blog.userName }}</strong> at {{ formattedPostDate() }}</p>
      <q-chip v-for="(tag, index) in blog.tags" :key="index">#{{ tag }}</q-chip>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import truncate from 'lodash.truncate';

export default {
  name: 'Blogs',
  props: ['blog'],
  data() {
    return {
      truncateTitleCount: 12,
      truncateExcerptCount: 45,
    }
  },
  methods: {
    formattedPostDate() {
      return moment(this.blog.createdAt.toDate()).format('MMM DD, YYYY');
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

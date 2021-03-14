<template>
  <div class="q-pa-md">
    <h1 class="text-weight-bold text-h2">Blog posts</h1>

    <div class="row">
      <div class="col col-12">
        <h3 class="text-weight-bold">{{ blog.title }}</h3>
        <p>{{ blog.body }}</p>
        <p>By {{ blog.userName }} at {{ formattedPostDate() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Blogs',
  props: ['blog'],
  methods: {
    formattedPostDate() {
      return moment(this.blog.createdAt.toDate()).format('MMM DD, YYYY');
    }
  },
}
</script>

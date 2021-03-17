<template>
  <q-page padding class="post__container">
    <div class="row justify-center items-start post__row" v-if="post.postPicture">
      <div class="col-7">
        <div class="post__picture" :style="{ backgroundImage: `url(${post.postPicture})` }"></div>
      </div>
    </div>

    <div class="row justify-center items-start post__row">
      <div class="col-7">
        <h1 class="text-weight-bold text-h2">{{ post.title }}</h1>
        <div class="post__user-info" vif="post.length">
          <img :src="post.userPicture" :alt="post.userName">
          <p>{{ post.userName }} at {{ formattedPostDate() }}</p> 
        </div>
      </div>
    </div>

    <div class="row justify-center items-start post__row">
      <div class="col-7">
        <q-chip v-for="(tag, index) in post.tags" :key="index">
          #{{tag}}
        </q-chip>
      </div>
    </div>

    <div class="row justify-center items-start post__row">
      <div class="col-7">
        <div v-html="post.body"></div>
        <hr>
      </div>
    </div>
    
    <div class="row justify-center items-start post__row">
      <div class="col-7">
        <Comments :post="{...post, id: $route.params.id}"/>
      </div>
    </div>

  </q-page>
</template>

<script>
import { firebase } from './../firebase/config.js';
import moment from 'moment';
import Comments from './../components/Comments.vue';

export default {
  name: 'Post',
  components: {
    Comments
  },
  data() {
    return {
      post: [],
    }
  },
  async created() {
    let postId = this.$route.params.id;

    let res = await firebase.firestore()
      .collection('posts')
      .doc(postId)
      .get();
    
    this.post = res.data();
    console.log(this.post);
  },
  methods: {
    getPost() {
      console.log('peepee');
    },
    formattedPostDate() {
      return moment(this.post.createdAt.toDate()).format('MMM DD, YYYY');
    }
  }
}
</script>

<style lang="scss">

  .post__picture {
    height: 560px;
    max-width: 100%;
    overflow: hidden;
    background: { 
      size: cover;
      repeat: no-repeat;
      position: center;
    }
  } 

  .post__user-info {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    img { 
      border-radius: 69%;
      height: 50px;
      width: 50px;
    }

    p {
      margin: 0 0 0 8px;
    }
  }

  .post__row{
    margin-bottom: 18px;
  }

</style>
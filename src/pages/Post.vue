<template>
  <q-page padding class="post__container" v-if="post">
    <div class="row justify-center items-start post__row post__picture-container" v-if="post.postPicture">

      <div class="col-12">

        <div class="post__picture" :style="{ backgroundImage: `url(${post.postPicture})` }"></div>

      </div>
    </div>

    <div class="row justify-center items-start post__row">
      <div class="col-lg-6 col-md-7 col-sm-10 col-xs-12">

        <h1 class="text-weight-bold text-h2">{{ post.title | badwordsFilter }}</h1>

        <div class="post__user-info-container">

          <div class="post__user-info">
        
            <img :src="post.userPicture" :alt="post.userName">

            <div>
              <p class="text-weight-bold">{{ post.userName }}</p> 
              <p class="text-caption">{{ formattedPostDate }}</p>          
            </div>

          </div>

          <div>
            <Likes :post="{...post, id: $route.params.id}"/>
          </div>

        </div>
      </div>
    </div>

    <div class="row justify-center items-start post__row">
      <div class="col-lg-6 col-md-7 col-sm-10 col-xs-12">
        <q-chip color="secondary" v-for="(tag, index) in post.tags" :key="index">
          <router-link class="text-white" :to="{ name: 'Tag', params: { tag: tag } }">
            #{{tag | badwordsFilter}}
          </router-link>
        </q-chip>
      </div>
    </div>

    <div class="row justify-center items-start post__row">
      <div class="col-lg-6 col-md-7 col-sm-10 col-xs-12">
        <div v-html="$options.filters.badwordsFilter(post.body)"></div>
        <hr>
      </div>
    </div>
    
    <div class="row justify-center items-start post__row">
      <div class="col-lg-6 col-md-7 col-sm-10 col-xs-12">
        <Comments :post="{...post, id: $route.params.id}"/>
      </div>
    </div>

  </q-page>
</template>

<script>
import { firebase } from './../firebase/config.js';
import moment from 'moment';
import Comments from './../components/Comments.vue';
import Likes from './../components/Likes.vue';
import Filter from 'bad-words';

export default {
  name: 'Post',
  components: {
    Comments,
    Likes
  },
  data() {
    return {
      post: null,
      formattedPostDate: null,
      metaInfo: 'test'
    }
  },
  meta() {
    return {
      title: this.post.title,
    }
  },
  async created() {
    this.$q.loading.show();    

    let postId = this.$route.params.id;

    let res = await firebase.firestore()
      .collection('posts')
      .doc(postId)
      .get();
    
    this.formattedPostDate = moment(res.data().createdAt.toDate()).format('MMM DD, YYYY YYYY HH:mm:ss a');
    this.post = await res.data();

    this.$q.loading.hide();    
  }
}
</script>

<style lang="scss">

  .post__container {
    min-height: 50vh !important;
  }

  .post__picture-container {
    min-height: 560px;
  }

  .post__picture {
    height: 560px;
    min-height: 560px;
    max-width: 100%;
    overflow: hidden;
    background: { 
      size: cover;
      repeat: no-repeat;
      position: center;
    }
  } 

  .post__user-info-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

  }

  .post__user-info {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    img { 
      border-radius: 69%;
      height: 42px;
      width: 42px;
    }

    p {
      margin: 0 0 0 8px;
    }
  }

  .post__row{
    margin-bottom: 18px;
  }

</style>
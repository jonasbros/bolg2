<template>
  <div>
    <q-btn 
      flat 
      round 
      color="primary" 
      icon="far fa-thumbs-up"
      v-if="!isLiked"
      @click="likeHandler"
    />

    <q-btn 
      flat 
      round 
      color="primary" 
      icon="fas fa-thumbs-up"
      v-else
      @click="likeHandler"
    />

    <span>
      {{ likes }} Likes
    </span>
  </div>
</template>

<script>
import _debounce from 'lodash.debounce';

export default {
  name: 'Likes',
  data () {
    return {
      likes: 0,
      isLiked: false,
    }
  },
  methods: {
    likeHandler() {
      let test = function(){
        console.log('hehe');
      }

      let debounced = _debounce(test, 1000);

      debounced();
    }
  }
}
</script>

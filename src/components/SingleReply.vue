<template>
  <div class="reply__container q-pa-md">

    <div class="row">
      <div class="col-12">
        <div class="row">
          <img 
          :src="reply.userPicture" 
          :alt="reply.userName"
          >
          
          <div>
            <p class="text-weight-bold">
              {{ reply.userName }}
            </p>

            <p class="text-caption">
              {{ reply.createdAt }}
            </p>
          </div>
        
        </div>
      </div>
    </div> <!-- user info row -->
    
    <div class="row reply-body__container">
      <p>{{ reply.body }}</p>
    </div>

    <hr class="q-separator q-separator q-separator--horizontal">
  </div>
</template>

<script>
export default {
  name: 'SingleReply',
  props: ['reply'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.reply__container {

  img { 
    width: 42px;
    height: 42px;
    border-radius: 69%;
    margin-right: 8px;
  }

  p { 
    margin: 0;
  }

  .reply-body__container {
    padding: 25px 25px 25px 25px;
  }

}
.reply__container:first-of-type {
  margin-top: 24px;
}

.reply__container:last-of-type {
  hr { 
    display: none;
  }
}


</style>
<template>
  <q-header elevated>
    <q-toolbar class="justify-start">
      <q-icon 
      name="fas fa-feather-alt"
      size="md"
      color="secondary"
      class="gt-sm"
      />

      <q-icon 
      name="fas fa-feather-alt"
      size="lg"
      color="secondary"
      class="sm"
      />

      <q-toolbar-title 
      class="text-weight-bold"
      shrink
      >
        <router-link
        :to="{ name: 'Home' }"
        class="text-secondary"
        >
          BOLG
        </router-link>        
      </q-toolbar-title>

      <Search class="gt-sm"/>

      <q-space />
      
      <div class="row gt-sm">
        <q-tabs v-model="tab">
          <q-route-tab 
            name="blogs"
            label="Posts"
            class="text-secondary"
            :ripple="false"
            :to="{ name: 'Home' }" 
          />

          <q-route-tab
            name="newpost"
            label="New Post"
            class="text-secondary"
            :ripple="false"
            :to="{ name: 'New Post' }" 
          />
        </q-tabs>

        <q-btn
          v-if="isAuthUser && !fromLoginLayout"
          flat 
          dense 
          class="text-secondary"
          icon="logout" 
          label="Logout" 
          @click="$emit('logout')" 
        />

        <q-btn
          v-if="!isAuthUser && !fromLoginLayout"
          flat 
          dense
          class="text-secondary"
          icon="login"
          label="Login"
          :to="{ name: 'Login' }" 
        />
      </div>

      <div class="sm">
        <q-btn 
          flat
          @click="menuButtonClick" 
          dense
          color="secondary"
          icon="menu"
          size="1.85rem"
        />
      </div>
    </q-toolbar>

  </q-header>
</template>

<script>
import { firebase } from './../firebase/config.js';
import Search from './Search.vue';

export default {
  name: 'Nav',
  props: {
    isAuthUser: [Object],
    fromLoginLayout: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Search,
  },
  data () {
    return {
      tab: 'blogs',
      drawer: false,
    }
  },
  methods: {
    menuButtonClick() {
      this.$emit('openDrawer');
      this.drawer = !this.drawer;
    }
  }
}
</script>

<style lang="scss">
  .q-toolbar {
    min-height: 60px;


    @media only screen and (max-width: 1023px) {
      min-height: 85px;
    }
  }

  .q-tab {
    min-height: 60px;
  }

  .q-toolbar__title {
    @media only screen and (max-width: 1023px) {
      font-size: 1.65rem;
    }
  }
</style>
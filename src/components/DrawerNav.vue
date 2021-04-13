<template>
  <q-drawer
    v-bind:value="value"
    v-on:input="$emit('drawer', $event.target.value)"
    :width="$q.screen.width"
    :breakpoint="500"
    side="right"
    behavior="mobile"
    overlay
    bordered
  >
    <div class="row justify-end q-mt-sm q-mr-md">
      <q-btn 
        flat
        @click="$emit('drawer')" 
        dense
        color="secondary"
        icon="close"
        size="1.85rem"
        v-show="value"
      />
    </div>
    <q-scroll-area class="fit">
      <!-- search -->
      <div class="row justify-center q-mt-xl">
        <div class="col-8">
          <Search 
            class="mobile__search"
            :isDense="false"
            :isOutlined="false"
          />
        </div>
      </div>
    <!-- links -->
      <div 
        class="column justify-center"
        style="width: 60%; margin: 48px auto;"
      >
          <q-btn
            flat 
            dense 
            label="Posts"
            class="text-secondary text-h3 text-weight-bold"
            :ripple="false"
            :to="{ name: 'Home' }" 
            :class="$route.name == 'Home' ? 'drawer-active-link' : ''"
            @click="$emit('drawer')" 
          />

          <q-btn
            v-if="isAuthUser && !fromLoginLayout"          
            flat 
            dense 
            label="New Post"
            class="text-secondary text-h3 text-weight-bold"
            :ripple="false"
            :to="{ name: 'New Post' }" 
            :class="$route.name == 'New Post' ? 'drawer-active-link' : ''"
            @click="$emit('drawer')"           
          />


          <q-btn
            v-if="isAuthUser"
            flat 
            dense 
            :ripple="false"
            class="text-secondary text-h3 text-weight-bold"
            label="Logout" 
            @click="$emit('logout')" 
          />

          <q-btn
            v-if="!isAuthUser && !fromLoginLayout"
            flat 
            dense
            :ripple="false"
            class="text-secondary text-h3 text-weight-bold"
            label="Login"
            :to="{ name: 'Login' }" 
            :class="$route.name == 'Login' ? 'drawer-active-link' : ''"        
          />

      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import Search from './Search.vue';

export default {
  name: 'DrawerNav',
  props: {
    //value is from v-model in component instance
    value: {
      default: false,
    },
    isAuthUser: [Object],
    fromLoginLayout: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    Search,
  },
  data () {
    return {}
  },
  methods: {
    test() {
      alert(1);
    }
  },
}
</script>

<style lang="scss">
  .drawer-active-link {
    .block {
      text-decoration: underline;
    }
  }
</style>

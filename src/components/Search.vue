<template>
  <q-input
    v-model="search"
    placeholder="Search"
    dark
    dense
    standout
    style="width: 350px;"
    @keydown.enter="execSearch"
  >
    <template v-slot:append>
      <q-btn
        unelevated
        round
        icon="search"
        @click="execSearch"
        lazy-rules="ondemand"
        ref="searchInput"
        :error="searchHasError"
        :error-message="searchErrorMessage"
      />
    </template>
  </q-input>
</template>

<script>
import { firebase } from './../firebase/config.js';

export default {
  name: 'Search',
  data () {
    return {
      search: this.$route.params.term || '',
      searchHasError: false,
      searchErrorMessage: '',
    }
  },
  methods: {
    execSearch() {
      if( !this.search ) {
        this.searchHasError = true;
        this.searchErrorMessage = "Please enter a search term.";
        return;
      }

      if( this.search ) {
        this.$router
        .push({ name: 'Search', params: { term: this.search } })
        .catch(err => {
          // Ignore the vuex err regarding  navigating to the page they are already on.
          if (
            err.name !== 'NavigationDuplicated' &&
            !err.message.includes('Avoided redundant navigation to current location')
          ) {
            // But print any other errors to the console
            logError(err);
          }
        });
      }
    }
  }
}
</script>

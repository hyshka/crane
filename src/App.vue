<template>
  <div id="app" class="mx-auto px4 max-width-4 border-box">
    <app-header></app-header>
    <page></page>
  </div>
</template>

<script>
import AppHeader from 'components/AppHeader';
import Page from 'components/Page';
import store from 'store/index';
// import { mapActions, mapGetters } from 'vuex'

export default {
  store,
  name: 'app',
  components: {
    AppHeader,
    Page,
  },
  // computed: mapGetters([
  //   'countPlural',
  // ]),
  // methods: {
  //   ...mapActions([
  //     'increment',
  //   ]),
  // },
};
</script>

<style>
@import "normalize.css";
@import "styles/basscss.css";
@import "styles/properties.css";
/*@import "styles/variables.scss";*/

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}
</style>

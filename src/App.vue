<template>
  <div id="app">
    <project
      v-for="project in projects"
      :project="project">
    </project>
  </div>
</template>

<script>
import Project from 'components/Project';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    Project,
  },
  computed: mapGetters([
    'projects',
  ]),
};
</script>

<style>
@import "normalize.css";
@import "styles/basscss.css";
@import "styles/properties.css";

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--textColor);
}
</style>

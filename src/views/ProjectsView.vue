<template>
  <div class="home">
    <project
      :project="project">
    </project>
  </div>
</template>

<script>
import Project from 'components/Project';
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    Project,
  },
  computed: mapGetters([
    'project',
  ]),
};
</script>

<style>
/*@import "normalize.css";
@import "styles/basscss.css";
@import "styles/properties.css";
*/

</style>

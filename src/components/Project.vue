<template>
  <div>
    <template v-for="page in project.pages">
      <div class="mx-auto px4 max-width-4 border-box">
        <page-header
          :project-title="project.title"
          :page-title="page.title">
        </page-header>
        <page
          :page="page"
          :project-title="project.title">
        </page>
      </div>
    </template>
  </div>
</template>

<script>
import PageHeader from 'components/PageHeader';
import Page from 'components/Page';

export default {
  name: 'project',
  components: {
    PageHeader,
    Page,
  },
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

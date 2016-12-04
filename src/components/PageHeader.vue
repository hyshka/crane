<template>
  <div class="py3 flex items-baseline">
    <h1 class="h1 bold left-align m0 flex-auto">{{ projectTitle }} Anatomies</h1>
    <h2 class="h2 regular right-align m0">{{ pageTitle }} Page</h2>
  </div>
</template>

<script>
export default {
  name: 'page-header',
  props: {
    projectTitle: String,
    pageTitle: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="py3 flex items-baseline">
    <h1 class="h1 bold left-align m0 flex-auto">{{ company_title }} Anatomies</h1>
    <h2 class="h2 regular right-align m0">{{ page_title }} Page</h2>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      company_title: 'Company Name',
      page_title: 'Home',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

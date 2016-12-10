<template>
  <div class="page mb4">
    <template v-for="(row, key, index) in page.rows">
      <create-row-button
        :row="row"></create-row-button>
      <row
        :row="row"
        :class="{first: index == 0}"></row>
    </template>
    <create-row-button></create-row-button>
  </div>
</template>

<script>
import Row from 'components/Row';
import CreateRowButton from 'components/CreateRowButton';

export default {
  name: 'page',
  components: {
    Row,
    CreateRowButton,
  },
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/properties.css";

/*.page {
  border-style: var(--borderStyle);
  border-color: var(--borderColor);
}*/
</style>

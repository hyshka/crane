<template>
  <div class="row border-bottom flex" :class="row.size">
    <block
      v-for="(block, index) in row.blocks"
      :title="block.title"
      :rowIndex="rowIndex"
      :blockIndex="index"
      :class="{first: index == 0}"></block>
  </div>
</template>

<script>
import Block from 'components/Block';
// import { mapGetters } from 'vuex';

export default {
  name: 'row',
  components: {
    Block,
  },
  // computed: mapGetters([
  //   'dialogIsOpen',
  // ]),
  props: {
    row: {
      type: Object,
      default: () => {},
    },
    rowIndex: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/properties.css";

.row {
  border-bottom-style: var(--borderStyle);
  border-bottom-color: var(--borderColor);
}

.first {
  border-top: 1px var(--borderStyle) var(--borderColor);
}

.small {
  height: var(--rowSmall);
}

.medium {
  height: var(--rowMedium);
}

.large {
  height: var(--rowLarge);
}
</style>

<template>
  <div class="page border mb4">
    <block
      v-for="block in blocks"
      :initial-title="block.title"
      :initial-size="block.size"></block>
    <add-button></add-button>
    <size-selector v-if="dialogIsOpen"></size-selector>
  </div>
</template>

<script>
import Block from 'components/Block';
import AddButton from 'components/AddButton';
import SizeSelector from 'components/SizeSelector';
import { mapGetters } from 'vuex';

export default {
  name: 'page',
  components: {
    Block,
    AddButton,
    SizeSelector,
  },
  computed: mapGetters([
    'blocks',
    'dialogIsOpen',
  ]),
  // methods: {
  //   ...mapActions([
  //     'showDialog',
  //   ]),
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/properties.css";

.page {
  border-style: var(--borderStyle);
  border-color: var(--borderColor);
  border-bottom: 0;
}
</style>

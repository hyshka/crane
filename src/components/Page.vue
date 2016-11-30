<template>
  <div class="page border mb4">
    <block
      v-for="block in blocks"
      :initial-title="block.title"
      :initial-size="block.size"></block>
    <button @click="showDialog">Add Block</button>
    <add-block-dialog v-if="dialogIsOpen" @close="hideDialog"></add-block-dialog>
  </div>
</template>

<script>
import Block from 'components/Block';
import AddBlockDialog from 'components/AddBlockDialog';
import { mapActions } from 'vuex';

export default {
  name: 'page',
  components: {
    Block,
    AddBlockDialog,
  },
  methods: {
    ...mapActions([
      'showDialog',
      'hideDialog',
    ]),
  },
  computed: {
    blocks() {
      return this.$store.state.blocks;
    },
    dialogIsOpen() {
      return this.$store.state.dialog.isOpen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  border-style: dashed;
  border-color: var(--border-color);
  border-bottom: 0;
}
</style>

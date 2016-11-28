<template>
  <div class="page border mb4">
    <block
      v-for="block in blocks"
      :initial-title="block.title"
      :initial-size="block.size"></block>
    <button @click="showDialog = true">Add Block</button>
    <add-block-dialog v-if="showDialog" @close="showDialog = false"></add-block-dialog>
  </div>
</template>

<script>
import Block from 'components/Block';
import AddBlockDialog from 'components/AddBlockDialog';
import {
    showDialog,
  } from 'store/actions';

export default {
  name: 'page',
  components: {
    Block,
    AddBlockDialog,
  },
  vuex: {
    getters: {
      showDialog: state => state.showDialog,
      blocks: state => state.blocks,
    },
    actions: {
      showDialog,
    },
  },
  created() {
    // console.log(this);
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

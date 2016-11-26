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

export default {
  name: 'page',
  components: {
    Block,
    AddBlockDialog,
  },
  data() {
    return {
      showDialog: false,
      blocks: [
        {
          title: 'Banner Image w/ Primary Message & CTA',
          size: 'large',
        },
        {
          title: 'Services',
          size: 'medium',
        },
        {
          title: 'About Us',
          size: 'medium',
        },
        {
          title: 'Resources / Updates / News',
          size: 'medium',
        },
        {
          title: 'Contact CTA',
          size: 'small',
        },
        {
          title: 'Footer',
          size: 'small',
        },
      ],
    };
  },
  methods: {
    addBlock() {
      console.log('add block');

      this.blocks.push(
        {
          title: 'Footer',
          size: 'small',
        },
      );
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

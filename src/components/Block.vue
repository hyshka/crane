<template>
  <div class="block-item flex items-center border-right">
    <div
      class="content mx-auto h1 m0 center caps"
      contenteditable
      @input="buildBlock($event)"
      @keyup.esc="blurContent"
      @keydown.shift.enter="blurContent">{{ title }}</div>
    </textarea>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'block',
  props: {
    title: String,
    rowIndex: Number,
    blockIndex: Number,
  },
  data() {
    return {
      isEditing: false,
      focused: false,
    };
  },
  methods: {
    ...mapActions([
      'updateBlock',
    ]),
    buildBlock(event) {
      const mutation = {
        title: event.target.textContent,
        blockIndex: this.blockIndex,
        rowIndex: this.rowIndex,
      };

      this.updateBlock(mutation);
    },
    blurContent() {
      console.log('blur');
      this.$el.querySelector('.content').blur();
      window.getSelection().removeAllRanges();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/properties.css";

.block-item {
  width: 100%;
  border-right-style: var(--borderStyle);
  border-right-color: var(--borderColor);
  border-top: 0;
}

.content {
  white-space: pre-wrap;
  outline: none;
  width: 100%;
}

.first {
  border-left: 1px var(--borderStyle) var(--borderColor);
}
</style>

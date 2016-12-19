<template>
  <div class="block-item flex items-center border-right">
    <label class="label block mx-auto h1 m0 center caps"
      :class="{ 'my-hide': focused }"
      @dblclick="focused = true">{{ title }}</label>
    <textarea class="textarea h1 m0 p0 border-none border-box center caps" type="text"
      :class="{ 'my-hide': !focused }"
      :value="title"
      v-focus="focused"
      @input="setTextareaHeight; buildBlock($event)"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.esc="focused = false">
      <!-- @keydown.shift.enter="focused = false" -->
    </textarea>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import { focus } from 'vue-focus';

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
      // height: 0,
    };
  },
  // computed: {
  //   height() {
  //   },
  // },
  methods: {
    ...mapActions([
      'updateBlock',
    ]),
    buildBlock(event) {
      const mutation = {
        title: event.target.value.trim(),
        blockIndex: this.blockIndex,
        rowIndex: this.rowIndex,
      };

      this.updateBlock(mutation);
      this.setTextareaHeight();
    },
    setTextareaHeight() {
      const label = this.$el.querySelector('.label');
      const textarea = this.$el.querySelector('.textarea');
      console.log('label height', label.offsetHeight);
      Vue.nextTick(() => {
        textarea.style.height = `${label.offsetHeight}px`;
      });
    },
  },
  mounted() {
    this.setTextareaHeight();
  },
  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  // directives: {
  //   'block-focus': function blockFocus(el, value) {
  //     if (value) {
  //       el.focus();
  //     }
  //   },
  // },
  directives: {
    focus,
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

.first {
  border-left: 1px var(--borderStyle) var(--borderColor);
}

textarea {
  width: 100%;
  outline: none;
  resize: none;
}

.label {
  white-space: pre;
  cursor: text;
}

.my-hide {
  position: absolute !important;
  /*height: 1px;*/
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
</style>

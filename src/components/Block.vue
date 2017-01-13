<template>
  <div class="block-item flex items-center border-right">
    <div
      class="content mx-auto h1 m0 center caps"
      contenteditable
      v-html="formattedTitle"
      @blur="buildBlock($event)"
      @keyup.esc="blurContent"
      @keydown.shift.enter="blurContent"></div>
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
  computed: {
    formattedTitle() {
      let title = this.title.trim();
      title = title.replace(/\n+\s+\n+/g, '\n\n');
      title = title.replace(/\n\n+/g, '\n\n');
      title = title.replace(/\n/g, '<br>');
      title = title.replace(/\s+/g, ' ');

      return title;
    },
  },
  methods: {
    ...mapActions([
      'updateBlock',
    ]),
    buildBlock(event) {
      let title = event.target.innerHTML;

      // Convert `&amp;` to `&`.
      title = title.replace(/&amp;/gi, '&');

      // Replace spaces.
      title = title.replace(/&nbsp;/gi, ' ');
      title = title.replace(/\s+/g, ' ');

      // Remove "<b>".
      title = title.replace(/<b>/gi, '');
      title = title.replace(/<\/b>/gi, '');

      // Remove "<strong>".
      title = title.replace(/<strong>/gi, '');
      title = title.replace(/<\/strong>/gi, '');

      // Remove "<i>".
      title = title.replace(/<i>/gi, '');
      title = title.replace(/<\/i>/gi, '');

      // Remove "<em>".
      title = title.replace(/<em>/gi, '');
      title = title.replace(/<\/em>/gi, '');

      // Remove "<u>".
      title = title.replace(/<u>/gi, '');
      title = title.replace(/<\/u>/gi, '');

      // Tighten up "<" and ">".
      title = title.replace(/>\s+/g, '>');
      title = title.replace(/\s+</g, '<');

      // Replace "<br>".
      title = title.replace(/<br>/gi, '\n');

      // Replace "<div>" (from Chrome).
      title = title.replace(/<div>/gi, '\n');
      title = title.replace(/<\/div>/gi, '');

      // Replace "<p>" (from IE).
      title = title.replace(/<p>/gi, '\n');
      title = title.replace(/<\/p>/gi, '');

      // No more than 2x newline, per "paragraph".
      title = title.replace(/\n\n+/g, '\n\n');

      // Whitespace before/after.
      title = title.trim();

      console.log('block', title);

      const mutation = {
        title,
        blockIndex: this.blockIndex,
        rowIndex: this.rowIndex,
      };

      this.updateBlock(mutation);
    },
    blurContent() {
      // console.log('blur');
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

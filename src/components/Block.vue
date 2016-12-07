<template>
  <div class="block-item flex items-center border-right">
    <label class="label block mx-auto h1 m0 center caps"
      :class="{ 'display-none': block == editedBlock }"
      @dblclick="editTodo(block)">{{ initialTitle }}</label>
    <textarea class="edit h1 m0 p0 border-none border-box center caps" type="text"
      :class="{ 'display-none': block != editedBlock }"
      v-model="block.title"
      v-block-focus="block == editedBlock"
      @blur="doneEdit(block)"
      @keyup.esc="cancelEdit(block)">
    </textarea>
  </div>
</template>

<script>
// import AddBlockDialog from 'components/AddBlockDialog';
// import { mapGetters } from 'vuex';

export default {
  name: 'block',
  components: {
    // AddBlockDialog,
  },
  props: {
    initialTitle: String,
  },
  // computed: mapGetters([
  //   'dialogIsOpen',
  // ]),
  data() {
    return {
      editedBlock: null,
      block: {
        title: this.initialTitle,
      },
    };
  },
  methods: {
    editTodo(block) {
      this.editedBlock = block;
    },
    doneEdit(block) {
      if (!this.editedBlock) {
        return;
      }
      this.editedBlock = null;
      this.block.title = block.title.trim();
    },
    cancelEdit() {
      this.editedBlock = null;
    },
  },
  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    'block-focus': function blockFocus(el, value) {
      if (value) {
        el.focus();
      }
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
}
</style>

<template>
  <div class="block-item flex items-center border-right">
    <label class="label block mx-auto h1 m0 center caps"
      :class="{ 'display-none': isEditing }"
      @dblclick="isEditing = !isEditing">{{ title }}</label>
    <textarea class="edit h1 m0 p0 border-none border-box center caps" type="text"
      :class="{ 'display-none': !isEditing }"
      :value="title"
      v-block-focus=""
      @input="updateBlock"
      @blur="isEditing = !isEditing"
      @keyup.esc="isEditing = !isEditing">
    </textarea>
  </div>
</template>

<script>
// import AddBlockDialog from 'components/AddBlockDialog';
// import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'block',
  components: {
    // AddBlockDialog,
  },
  props: {
    title: String,
    index: Number,
  },
  // computed: mapGetters([
  //   'dialogIsOpen',
  // ]),
  data() {
    return {
      isEditing: false,
      // block: {
      //   title: this.initialTitle,
      // },
    };
  },
  methods: {
    ...mapActions([
      'updateBlock',
    ]),
    // editTodo(block) {
    //   this.editedBlock = block;
    // },
    // doneEdit(block) {
    //   if (!this.editedBlock) {
    //     return;
    //   }
    //   this.editedBlock = null;
    //   this.block.title = block.title.trim();
    // },
    // cancelEdit() {
    //   this.editedBlock = null;
    // },
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

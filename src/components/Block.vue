<template>
  <div class="block-item border-bottom flex items-center" :class="block.size">
    <add-block-dialog v-if="dialogIsOpen"></add-block-dialog>
    <label class="label block mx-auto h1 m0 center caps"
      :class="{ 'display-none': block == editedBlock }"
      @dblclick="editTodo(block)">{{ block.title }}</label>
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
import AddBlockDialog from 'components/AddBlockDialog';
import { mapGetters } from 'vuex';

export default {
  name: 'block',
  components: {
    AddBlockDialog,
  },
  props: {
    initialTitle: String,
    initialSize: String,
  },
  computed: mapGetters([
    'dialogIsOpen',
  ]),
  data() {
    return {
      editedBlock: null,
      block: {
        title: this.initialTitle,
        size: this.initialSize,
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
.block-item {
  border-bottom-style: dashed;
  border-bottom-color: var(--border-color);
}

.small {
  /*padding-top: 2rem;*/
  /*padding-bottom: 2rem;*/
  height: 100px;
}

.medium {
  /*padding-top: 8rem;*/
  /*padding-bottom: 8rem;*/
  height: 300px;
}

.large {
  /*padding-top: 12rem;*/
  /*padding-bottom: 12rem;*/
  height: 400px;
}

.caps {
  letter-spacing: 0;
}

textarea {
  width: 100%;
  outline: none;
  resize: none;
  /*vertical-align: middle;*/
}

.label {
  white-space: pre;
}
</style>

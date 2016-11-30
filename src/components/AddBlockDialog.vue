<template>
<!--   <div class="py3 flex items-baseline">
    <h1 class="h1 bold left-align m0 flex-auto">{{ company_title }} Anatomies</h1>
    <h2 class="h2 regular right-align m0">{{ page_title }} Page</h2>
  </div> -->

  <transition name="modal">
    <div class="modal-mask fixed z4 top-0 left-0 bottom-0 right-0 flex items-center">
      <div class="modal-container flex-auto max-width-2 mx-auto p3 rounded">
        <p class="h2 mt0">
          <label>Title:
            <input type="text" v-model="block.title">
          </label>
        </p>
        <p class="h2">Size:
          <template v-for="size in availableSizes">
            <input type="radio"
              :id="size"
              :value="size"
              name="size"
              v-model="block.size">
            <label :for="size">{{ size }}</label>
          </template>
        </p>
        <button class="modal-default-button" @click="addBlock(block)">
          Add Block
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'add-block-dialog',
  data() {
    return {
      block: {
        title: '',
        size: '',
      },
      availableSizes: [
        'small',
        'medium',
        'large',
      ],
    };
  },
  methods: {
    ...mapActions([
      'addBlock',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal-container {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

/* transition styles */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

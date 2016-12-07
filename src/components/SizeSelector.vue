<template>
  <transition name="modal">
    <div class="modal-container absolute left-0 right-0 z4">
      <div class="modal-content relative max-width-1 mx-auto p2 rounded">
        <p class="h2 mt0 mb2">
          <template v-for="size in availableSizes">
            <input type="radio"
              :id="size"
              :value="size"
              name="size"
              v-model="row.size">
            <label :for="size" class="mr2">{{ size }}</label>
          </template>
        </p>
        <button class="" @click="$emit('close'); createRow(row);">
          Add Row
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'add-block-dialog',
  props: {
    index: Number,
  },
  data() {
    return {
      row: {
        size: '',
        index: this.index,
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
      'createRow',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/properties.css";

.modal-container {
  top: 58px;
  transition: all var(--transitionDuration) var(--transitionTiming);
}

.modal-content {
  background-color: var(--sizeSelectorBackground);
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);*/

  &::before {
    position: absolute;
    content: '';
    display: block;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--sizeSelectorBackground);
  }
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

<template>
  <div class="center relative">
    <div class="absolute right-0 left-0 button-container">
      <div class="flex flex-column items-center justify-center">
        <button class="button h1 p2 border-none circle" @click="showSelector = !showSelector">
          +
        </button>
        <size-selector
          v-if="showSelector"
          :rowIndex="rowIndex"
          @close="showSelector = false"></size-selector>
      </div>
    </div>
  </div>
</template>

<script>
import SizeSelector from 'components/SizeSelector';
// import { mapActions } from 'vuex';

export default {
  name: 'create-row-button',
  components: {
    SizeSelector,
  },
  props: {
    rowIndex: Number,
  },
  data() {
    return {
      showSelector: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/properties.css";

.button-container {
  transition: all var(--transitionDuration) var(--transitionTiming);
  opacity: 0;
  margin-top: -24px;
  z-index: 1;

  &:hover {
    opacity: 1;
  }
}

.button {
  outline: none;
  background-color: var(--buttonBackground);
  line-height: 1rem;
  color: var(--buttonColor);
  cursor: pointer;
}
</style>

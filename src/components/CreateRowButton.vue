<template>
  <div class="center relative button-wrapper">
    <size-selector
      v-if="showSelector"
      :index="index"
      @close="showSelector = false"></size-selector>
    <button class="button h1 p2 border-none" @click="showSelector = !showSelector">
      +
    </button>
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
    index: Number,
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

.button-wrapper {
  margin-top: -24px;
  transition: all var(--transitionDuration) var(--transitionTiming);
  opacity: 0;

  &:hover {
    opacity: 1;
  }
}

.button {
  outline: none;
  background-color: var(--buttonBackground);
  line-height: 1rem;
  border-radius: 50%;
  color: var(--buttonColor);
  cursor: pointer;
}
</style>

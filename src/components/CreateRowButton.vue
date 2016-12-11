<template>
  <div class="center relative button-wrapper">
    <size-selector
      v-if="showSelector"
      :index="index"
      @close="showSelector = false"></size-selector>
    <button class="button h1 p2 border-none circle absolute" @click="showSelector = !showSelector">
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
  color: var(--buttonColor);
  cursor: pointer;
  margin-top: -24px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

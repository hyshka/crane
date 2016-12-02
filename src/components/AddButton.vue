<template>
  <div class="center button-wrapper">
    <button class="button h1 p2 border-none" @click="showDialog">
      +
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'add-button',
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
      'showDialog',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/properties.css";

.button-wrapper {
  margin-top: -24px;
}

.button {
  outline: none;
  background-color: var(--buttonBackground);
  line-height: 1rem;
  border-radius: 50%;
  color: var(--borderColor);
}
</style>

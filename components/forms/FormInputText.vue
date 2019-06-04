<template>
  <div class="field">
    <label ref="label" :for="id">{{ title }}</label>
    <input
      type="text"
      :value="value"
      @focus="setFocusClass"
      @blur="setBlurClass"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.setClassWhenFilled()
  },
  methods: {
    setClassWhenFilled() {
      if (this.value) this.$refs.label.classList.add('focus')
    },
    setFocusClass() {
      this.$refs.label.classList.add('focus')
    },
    setBlurClass() {
      if (!this.value) this.$refs.label.classList.remove('focus')
    }
  }
}
</script>

<style lang="postcss" scoped>
.field {
  margin-bottom: 1em;
  position: relative;

  & label {
    position: absolute;
    transition: transform 0.2s ease-out;
    top: 1rem;
    left: 0.75rem;
    line-height: 1.2;
    transform-origin: 0 0;

    &.focus {
      transform: scale(0.7) translateY(-1em);
    }
  }
}
</style>

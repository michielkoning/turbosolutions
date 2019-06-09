<template>
  <blockquote>
    <div class="header">
      <h3>{{ review.title }}</h3>
      -
      <cite>{{ review.cite }}</cite>
    </div>
    <p>{{ review.text }}</p>
  </blockquote>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
h3 {
  display: inline;
  position: relative;

  &:before {
    content: '“';
  }
  &:after {
    content: '”';
  }
}

blockquote {
  margin: 0;
}

cite {
  margin: 0.5em 0 0;
  font-size: 1.25rem;
}

p {
  margin: 0;
}
</style>

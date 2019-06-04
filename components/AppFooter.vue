<template>
  <footer>
    <notch-wrapper>
      <div class="wrapper">
        <a href="#">asdsad</a>
        footer
      </div>
    </notch-wrapper>
  </footer>
</template>

<script>
import NotchWrapper from '@/components/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper
  }
}
</script>

<style lang="postcss" scoped>
footer {
  @mixin color-negative;
}

.wrapper {
  @mixin center;
  padding-top: 3em;
  padding-bottom: 3em;
}
</style>

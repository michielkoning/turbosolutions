<template>
  <section>
    <notch-wrapper>
      <slot />
    </notch-wrapper>
  </section>
</template>

<script>
import NotchWrapper from '@/components/NotchWrapper.vue'
export default {
  components: {
    NotchWrapper,
  },
}
</script>

<style lang="postcss" scoped>
section {
  padding: 3em 0;
}
</style>

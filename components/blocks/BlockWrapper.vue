<template>
  <section>
    <notch-wrapper>
      <div class="wrapper">
        <slot />
      </div>
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

.wrapper {
  @mixin center var(--container-width-lg);
}
</style>

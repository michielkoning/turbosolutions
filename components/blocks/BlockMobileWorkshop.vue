<template>
  <block-wrapper>
    <div class="wrapper">
      <div class="text">
        <h1>{{ $t('pages.home.mobileWorkshop.title') }}</h1>
        <h2>{{ $t('pages.home.mobileWorkshop.intro') }}</h2>
        <p>
          {{ $t('pages.home.mobileWorkshop.text') }}
        </p>
      </div>
      <div class="image-wrapper">
        <img src="/media/images/mobile-workshop.jpg" alt="" />
      </div>
    </div>
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
export default {
  components: {
    BlockWrapper,
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  display: grid;
  grid-gap: var(--gutter);
  @media (--viewport-sm) {
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  }
}
</style>

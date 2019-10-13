<template>
  <block-wrapper>
    <div :class="$style.wrapper">
      <div>
        <h1>{{ $t('blocks.mobileWorkshop.title') }}</h1>
        <h2>{{ $t('blocks.mobileWorkshop.intro') }}</h2>
        <p>{{ $t('blocks.mobileWorkshop.text') }}</p>
      </div>
      <div>
        <app-image src="/media/images/tse_welding.jpg?nf_resize=fit&w=600&h=470" width="600" height="470" />
      </div>
    </div>
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
import AppImage from '@/components/AppImage.vue'

export default {
  components: {
    BlockWrapper,
    AppImage
  }
}
</script>

<style lang="postcss" module>
.wrapper {
  display: grid;
  grid-gap: var(--gutter);
  @media (--viewport-sm) {
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  }
}
</style>

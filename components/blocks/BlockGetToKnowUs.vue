<template>
  <block-wrapper>
    <skip-link-title :title="$t('pages.getToKnowUs.title')" />
    <h2>{{ $t('pages.getToKnowUs.intro') }}</h2>

    <p v-for="text in $t('pages.getToKnowUs.text.top')" :key="text">
      {{ text }}
    </p>
    <div :class="$style['image-wrapper']">
      <app-image :class="$style.image" src="/media/images/tse_reparing.jpg?nf_resize=fit&w=770&h=425" width="770" height="425" />
    </div>
    <p>{{ $t('pages.getToKnowUs.text.bottom') }}</p>
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
import SkipLinkTitle from '@/components/SkipLinkTitle.vue'
import AppImage from '@/components/AppImage.vue'

export default {
  components: {
    BlockWrapper,
    SkipLinkTitle,
    AppImage
  }
}
</script>

<style lang="postcss" module>
.image {
  display: block;
  width: 100%;
}

.image-wrapper {
  margin: 0 calc(var(--gutter) / -2) 1em;
}
</style>

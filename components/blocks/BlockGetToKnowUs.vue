<template>
  <block-wrapper>
    <skip-link-title class="title" :title="$t('pages.getToKnowUs.title')" />
    <h2>{{ $t('pages.getToKnowUs.intro') }}</h2>

    <p>{{ $t('pages.getToKnowUs.text.top') }}</p>
    <div class="image-wrapper">
      <app-image src="/media/images/get-to-know-us.jpg" width="770" height="425" />
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

<style lang="postcss" scoped>
img {
  display: block;
  width: 100%;
}

.image-wrapper {
  margin: 0 calc(var(--gutter) / -2) 1em;
}
</style>

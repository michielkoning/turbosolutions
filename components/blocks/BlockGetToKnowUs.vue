<template>
  <block-wrapper>
    <skip-link-title :title="$t('pages.getToKnowUs.title')" />
    <h2>{{ $t('pages.getToKnowUs.intro') }}</h2>

    <app-text :text="$t('pages.getToKnowUs.text.top')" />
    <div :class="$style['image-wrapper']">
      <app-image :class="$style.image" src="/media/images/tse_reparing.jpg?nf_resize=fit&w=1000&h=674" width="1000" height="674" />
    </div>
    <app-text :text="$t('pages.getToKnowUs.text.bottom')" />
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
import SkipLinkTitle from '@/components/SkipLinkTitle.vue'
import AppImage from '@/components/AppImage.vue'
import AppText from '@/components/shared/AppText.vue'

export default {
  components: {
    BlockWrapper,
    SkipLinkTitle,
    AppImage,
    AppText
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

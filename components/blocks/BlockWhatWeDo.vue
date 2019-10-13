<template>
  <block-wrapper>
    <skip-link-title class="title" :title="$t('pages.whatWeDo.title')" />
    <h2>{{ $t('pages.whatWeDo.intro') }}</h2>
    <p v-for="text in $t('pages.whatWeDo.top.text')" :key="text">
      {{ text }}
    </p>
    <ul>
      <li v-for="text in $t('pages.whatWeDo.top.list')" :key="text">
        {{ text }}
      </li>
    </ul>
    <div :class="$style['image-wrapper']">
      <app-image :class="$style['image']" src="/media/images/tse_mechanics.jpg?nf_resize=fit&w=770&h=425" width="770" height="425" />
    </div>
    <p v-for="text in $t('pages.whatWeDo.bottom')" :key="text">
      {{ text }}
    </p>
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

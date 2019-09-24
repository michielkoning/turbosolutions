<template>
  <block-wrapper>
    <skip-link-title class="title" :title="$t('pages.whatWeDo.title')" />
    <h2>{{ $t('pages.whatWeDo.intro') }}</h2>
    <p v-for="text in $t('pages.whatWeDo.text')" :key="text">
      {{ text }}
    </p>
    <ul>
      <li v-for="text in $t('pages.whatWeDo.list')" :key="text">
        {{ text }}
      </li>
    </ul>
    <div class="image-wrapper">
      <img src="/media/images/get-to-know-us.jpg" alt="">
    </div>
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
import SkipLinkTitle from '@/components/SkipLinkTitle.vue'

export default {
  components: {
    BlockWrapper,
    SkipLinkTitle
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

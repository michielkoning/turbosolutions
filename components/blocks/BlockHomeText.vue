<template>
  <block-wrapper>
    <h1>{{ $t('pages.home.bottom.h1') }}</h1>
    <h2>{{ $t('pages.home.bottom.h2') }}</h2>

    <app-text :text="$t('pages.home.bottom.text.part1')" />
    <h3>{{ $t('pages.home.bottom.h3') }}</h3>
    <app-text :text="$t('pages.home.bottom.text.part2')" />
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
import AppText from '@/components/shared/AppText.vue'

export default {
  components: {
    BlockWrapper,
    AppText
  }
}
</script>

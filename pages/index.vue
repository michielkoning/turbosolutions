<template>
  <div>
    <block-gallery />
    <block-mobile-workshop :show-full-page-image="false" />
    <block-home-text />
  </div>
</template>

<script>
import BlockGallery from '@/components/blocks/BlockGallery.vue'
import BlockMobileWorkshop from '@/components/blocks/BlockMobileWorkshop.vue'
import BlockHomeText from '@/components/blocks/BlockHomeText.vue'

export default {
  components: {
    BlockGallery,
    BlockMobileWorkshop,
    BlockHomeText
  },
  head () {
    return {
      title: this.$t('pages.home.title')
    }
  }
}
</script>

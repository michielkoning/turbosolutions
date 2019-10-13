<template>
  <div>
    <block-gallery />
    <block-mobile-workshop :show-full-page-image="false" />
  </div>
</template>

<script>
import BlockGallery from '@/components/blocks/BlockGallery.vue'
import BlockMobileWorkshop from '@/components/blocks/BlockMobileWorkshop.vue'

export default {
  components: {
    BlockGallery,
    BlockMobileWorkshop
  },
  head () {
    return {
      title: this.$t('pages.home.title')
    }
  }
}
</script>

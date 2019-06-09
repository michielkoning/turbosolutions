<template>
  <div>
    <block-gallery />
    <block-mobile-workshop />
    <block-form-contact />
  </div>
</template>

<script>
import BlockGallery from '@/components/blocks/BlockGallery.vue'
import BlockFormContact from '@/components/blocks/BlockFormContact.vue'
import BlockMobileWorkshop from '@/components/blocks/BlockMobileWorkshop.vue'

export default {
  components: {
    BlockFormContact,
    BlockGallery,
    BlockMobileWorkshop,
  },
  meta: {
    step: 0,
  },
  head() {
    return {
      title: this.$t('home'),
    }
  },
}
</script>

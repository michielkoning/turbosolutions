<template>
  <div>
    <block-mobile-workshop />
  </div>
</template>

<script>
import BlockMobileWorkshop from '@/components/blocks/BlockMobileWorkshop.vue'

export default {
  components: {
    BlockMobileWorkshop,
  },
  meta: {
    step: 3,
  },
  head() {
    return {
      title: this.$t('pages.mobileWorkshop.title'),
    }
  },
}
</script>

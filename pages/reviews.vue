<template>
  <div>
    <block-reviews />
  </div>
</template>

<script>
import BlockReviews from '@/components/blocks/BlockReviews.vue'

export default {
  components: {
    BlockReviews,
  },
  meta: {
    step: 4,
  },
  head() {
    return {
      title: this.$t('whatWeDo'),
    }
  },
}
</script>

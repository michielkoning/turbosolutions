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
  head() {
    return {
      title: this.$t('pages.reviews.title'),
    }
  },
}
</script>

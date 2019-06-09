<template>
  <div>
    <block-get-to-know-us />
  </div>
</template>

<script>
import BlockGetToKnowUs from '@/components/blocks/BlockGetToKnowUs.vue'

export default {
  components: {
    BlockGetToKnowUs,
  },
  meta: {
    step: 1,
  },
  head() {
    return {
      title: this.$t('getToKnowUs'),
    }
  },
}
</script>

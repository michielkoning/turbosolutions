<template>
  <div>
    <block-contact />
  </div>
</template>

<script>
import BlockContact from '@/components/blocks/BlockContact.vue'

export default {
  components: {
    BlockContact,
  },
  meta: {
    step: 4,
  },
  head() {
    return {
      title: this.$t('contact'),
    }
  },
}
</script>

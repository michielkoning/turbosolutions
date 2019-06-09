<template>
  <div>
    <home-intro />

    <block-form-contact />
  </div>
</template>

<script>
import BlockFormContact from '@/components/blocks/BlockFormContact.vue'
import HomeIntro from '@/components/Home/HomeIntro.vue'

export default {
  components: {
    BlockFormContact,
    HomeIntro,
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

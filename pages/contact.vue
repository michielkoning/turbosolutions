<template>
  <div>
    <iframe
      width="600"
      height="450"
      frameborder="0"
      style="border:0"
      src="https://www.google.com/maps/embed/v1/search?q=wageningen&key=AIzaSyA47B7McccErX6_KASOTpSYDFUrcJiXAoI"
      allowfullscreen
    ></iframe>
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
    step: 5,
  },
  head() {
    return {
      title: this.$t('contact'),
    }
  },
}
</script>

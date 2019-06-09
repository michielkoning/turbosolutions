<template>
  <block-wrapper class="block-form-contact">
    <div class="wrapper">
      <form-contact />
    </div>
  </block-wrapper>
</template>

<script>
import FormContact from '@/components/FormContact.vue'
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
export default {
  components: {
    FormContact,
    BlockWrapper,
  },
}
</script>

<style lang="postcss" scoped>
.block-form-contact {
  color: var(--color-primary);
  background: #9ad3ec;
}

.wrapper {
  @mixin center var(--container-width-lg);
}
</style>

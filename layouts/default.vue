<template>
  <div class="page">
    <app-header />
    <nuxt class="content" />
    <block-form-contact />
    <error-handler />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ErrorHandler from '@/components/ErrorHandler.vue'
import BlockFormContact from '@/components/blocks/BlockFormContact.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    ErrorHandler,
    BlockFormContact,
  },
}
</script>

<style lang="postcss" scoped>
.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1 0 auto;
}
</style>

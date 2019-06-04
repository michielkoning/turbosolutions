<template>
  <div class="page">
    <app-header />
    <nuxt class="content" />
    <error-handler />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ErrorHandler from '@/components/ErrorHandler.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    ErrorHandler
  }
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

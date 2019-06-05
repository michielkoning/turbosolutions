<template>
  <app-page :title="$t('whatWeDo')"></app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue'

export default {
  components: {
    AppPage,
  },
  meta: {
    step: 2,
  },
  head() {
    return {
      title: this.$t('whatWeDo'),
    }
  },
}
</script>

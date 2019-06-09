<template>
  <app-page :title="$t('getToKnowUs')"></app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue'

export default {
  components: {
    AppPage,
  },
  meta: {
    step: 1
  },
  head() {
    return {
      title: this.$t('getToKnowUs'),
    }
  },
}
</script>

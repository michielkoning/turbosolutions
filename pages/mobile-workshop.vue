<template>
  <app-page :title="$t('mobileWorkshop')"></app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue'

export default {
  components: {
    AppPage,
  },
  meta: {
    step: 3,
  },
  head() {
    return {
      title: this.$t('mobileWorkshop'),
    }
  },
}
</script>

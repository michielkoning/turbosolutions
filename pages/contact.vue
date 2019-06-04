<template>
  <app-page :title="$t('contact')">
    <fieldset>
      <legend>Contactformulier</legend>
    </fieldset>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue'

export default {
  components: {
    AppPage
  },
  meta: {
    step: 4
  },
  head() {
    return {
      title: this.$t('contact')
    }
  }
}
</script>

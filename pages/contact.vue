<template>
  <app-page :title="$t('contact')">
    <form-contact />
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue'
import FormContact from '@/components/FormContact.vue'

export default {
  components: {
    AppPage,
    FormContact,
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

<template>
  <app-page title="Get to know us">
    <h2>See our</h2>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum
      iusto impedit id saepe nulla rerum, libero quaerat excepturi ipsam
      voluptas tenetur pariatur eos. Numquam deserunt aliquid officia doloremque
      cumque?
    </p>

    <form-contact />
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue'
import FormContact from '@/components/FormContact.vue'

export default {
  components: {
    AppPage,
    FormContact
  },
  meta: {
    step: 0
  },
  head() {
    return {
      title: this.$t('home')
    }
  }
}
</script>

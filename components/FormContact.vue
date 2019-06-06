<template>
  <form action @submit.prevent="submit">
    <form-fieldset title="Contactformulier">
      <form-input-text
        v-model.trim.lazy="$v.name.$model"
        type="text"
        title="Name"
        :error-message="errorMessageName"
      />
      <form-input-text
        v-model.trim.lazy="$v.email.$model"
        type="email"
        title="E-mailaddress"
        :error-message="errorMessageEmail"
      />
      <button type="submit">Send</button>
    </form-fieldset>
  </form>
</template>

<script>
import FormFieldset from '@/components/forms/FormFieldset.vue'
import FormInputText from '@/components/forms/FormInputText.vue'
import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {
    FormFieldset,
    FormInputText,
  },
  data() {
    return {
      name: '',
      email: '',
    }
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
  },
  computed: {
    errorMessageName() {
      if (this.$v.name.$anyError) {
        if (!this.$v.name.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.name').toLowerCase(),
          })
        }
      }
      return null
    },
    errorMessageEmail() {
      if (this.$v.email.$anyError) {
        if (!this.$v.email.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.email').toLowerCase(),
          })
        }

        if (!this.$v.email.email) return this.$t('form.error.email.email')
      }
      return null
    },
  },
  methods: {
    validate() {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    submit() {
      this.errorMessageForm = ''
      window.console.log(this.validate())
      return this.validate()
    },
  },
}
</script>

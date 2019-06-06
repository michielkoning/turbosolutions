<template>
  <p v-if="submitted">Succes</p>

  <form
    v-else
    action
    data-netlify="true"
    method="post"
    name="contact"
    @submit.prevent="submit"
  >
    <input type="hidden" name="form-name" value="contact" />
    <form-fieldset title="Contactformulier">
      <form-input-text
        v-model.trim.lazy="$v.form.name.$model"
        type="text"
        name="name"
        title="Name"
        :error-message="errorMessageName"
      />
      <form-input-text
        v-model.trim.lazy="$v.form.email.$model"
        name="email"
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
import axios from 'axios'

export default {
  components: {
    FormFieldset,
    FormInputText,
  },
  data() {
    return {
      submitted: false,
      form: {
        name: 'michiel',
        email: 'mail@michielkoning.nl',
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    errorMessageName() {
      if (this.$v.form.name.$anyError) {
        if (!this.$v.form.name.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.name').toLowerCase(),
          })
        }
      }
      return null
    },
    errorMessageEmail() {
      if (this.$v.form.email.$anyError) {
        if (!this.$v.form.email.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.email').toLowerCase(),
          })
        }

        if (!this.$v.form.email.email) return this.$t('form.error.email.email')
      }
      return null
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&')
    },
    validate() {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    submit() {
      this.errorMessageForm = ''
      if (this.validate()) {
        const axiosConfig = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
        axios
          .post(
            '/',
            this.encode({
              'form-name': 'contact',
              ...this.form,
            }),
            axiosConfig,
          )
          .then(() => {
            this.submitted = true
          })
      }
    },
  },
}
</script>

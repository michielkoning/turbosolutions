<template>
  <form action @submit.prevent="submit">
    <form-fieldset title="Contactformulier">
      <form-input-text v-model.trim="$v.name.$model" type="text" title="Name" />
      {{ $v.name }}
      <form-input-text
        v-model.trim="$v.email.$model"
        type="email"
        title="E-mailaddress"
      />
      {{ $v.email }}
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

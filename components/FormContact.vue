<template>
  <form action>
    <form-fieldset title="Contactformulier">
      <form-input-text id="name" v-model="name" title="Name" />
      <form-input-text id="email" v-model="email" title="E-mailaddress" />
    </form-fieldset>
  </form>
</template>

<script>
import FormFieldset from '@/components/forms/FormFieldset.vue'
import FormInputText from '@/components/forms/FormInputText.vue'

export default {
  components: {
    FormFieldset,
    FormInputText
  },
  data() {
    return {
      name: '',
      email: ''
    }
  }
}
</script>

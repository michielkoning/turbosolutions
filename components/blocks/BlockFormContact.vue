<template>
  <block-wrapper class="block-form-contact">
    <h1>{{ $t('footer.contact.title') }}</h1>
    <div class="wrapper">
      <div class="text">
        <p>
          Call us: <a href="tel:+34 674 14 71 73">+34 674 14 71 73</a> or send
          an e-mail:
          <a href="mailto:dexter@turbosolutionseurope.com"
            >dexter@turbosolutionseurope.com</a
          >
        </p>
        <p>{{ $t('footer.contact.text') }}</p>
      </div>
      <form-contact class="form" />
    </div>
  </block-wrapper>
</template>

<script>
import FormContact from '@/components/FormContact.vue'
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'

export default {
  components: {
    FormContact,
    BlockWrapper,
  },
}
</script>

<style lang="postcss" scoped>
.block-form-contact {
  color: var(--color-primary);
  background: #9ad3ec;
}

.wrapper {
  @media (--viewport-md) {
    grid-template-columns: 2fr 1fr;
    display: grid;
    grid-gap: 1em;
    grid-template-areas: 'form text';
  }
}

.text {
  grid-area: text;
}

.form {
  grid-area: form;
}

a {
  word-wrap: break-word;
}
</style>

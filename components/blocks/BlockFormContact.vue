<template>
  <block-wrapper class="block-form-contact">
    <h1>{{ $t('blocks.contact.title') }}</h1>
    <div class="wrapper">
      <div class="text">
        <p>
          {{ $t('blocks.contact.text.part1') }}
          <a :href="`tel:${$t('address.phoneNumber')}`">{{
            $t('address.phoneNumber')
          }}</a>
          {{ $t('blocks.contact.text.part2') }}
          <a :href="`mailto:${$t('address.email')}`">{{
            $t('address.email')
          }}</a>{{ $t('blocks.contact.text.part3') }}
        </p>
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
    BlockWrapper
  }
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

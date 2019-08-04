<template>
  <ul>
    <li>
      <icon-star-empty aria-hidden="true" width="26" height="26" />
      <span class="title">{{ $t('header.usps.quality') }}</span>
    </li>
    <li>
      <icon-spare-parts aria-hidden="true" width="24" height="24" />
      <span class="title">{{ $t('header.usps.stock') }}</span>
    </li>
    <li>
      <icon-service aria-hidden="true" width="24" height="24" />
      <span class="title">{{ $t('header.usps.service') }}</span>
    </li>
  </ul>
</template>

<script>
import IconService from '@/assets/icons/service.svg'
import IconSpareParts from '@/assets/icons/spare-parts.svg'
import IconStarEmpty from '@/assets/icons/star-empty.svg'

export default {
  components: {
    IconService,
    IconSpareParts,
    IconStarEmpty,
  },
}
</script>

<style lang="postcss" scoped>
ul {
  @mixin list-reset;

  text-transform: uppercase;
  margin-top: 1em;
  font-size: 0.9em;
  @media (--viewport-md) {
    font-size: 0.8em;
  }
  @media (--viewport-lg) {
    font-size: 0.9em;
  }
  @media (--show-full-navigation) {
    margin-top: 0;
    display: flex;
  }
}

li {
  display: flex;
  margin-bottom: 0.5em;

  @media (--show-full-navigation) {
    & + li {
      margin-left: 1em;
    }
  }
}

.title {
  margin-left: 0.5em;
}

svg {
  margin-top: 0.1em;
  flex: 0 0 auto;
}
</style>

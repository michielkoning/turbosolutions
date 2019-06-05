<template>
  <ul>
    <li>
      <icon-pause aria-hidden="true" width="24" height="24" />
      <span class="title">The best quality</span>
    </li>
    <li>
      <icon-pause aria-hidden="true" width="24" height="24" />
      <span class="title">Spare parts always</span>
      in stock
    </li>
    <li>
      <icon-pause aria-hidden="true" width="24" height="24" />
      <span class="title">24/7 service</span>
    </li>
  </ul>
</template>

<script>
import IconPause from '@/assets/icons/pause.svg'

export default {
  components: {
    IconPause,
  },
}
</script>

<style lang="postcss" scoped>
ul {
  @mixin list-reset;
  text-transform: uppercase;
  margin-bottom: 1em;

  @media (--navigation-position-left) {
    display: flex;
  }
}

li {
  display: flex;
  align-items: center;

  @media (--navigation-position-left) {
    & + li {
      margin-left: 1em;
    }
  }
}

.title {
  margin-left: 0.5em;
}
</style>

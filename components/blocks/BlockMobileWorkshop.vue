<template>
  <block-wrapper>
    <div class="wrapper">
      <div class="text">
        <h1>Mobile Workshop</h1>
        <h2>See our Gamechanging Turbocharger service in action</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </div>
      <div class="image-wrapper">
        <img src="/media/images/mobile-workshop.jpg" alt="" />
      </div>
    </div>
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
export default {
  components: {
    BlockWrapper,
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  display: grid;
  grid-gap: var(--gutter);
  @media (--viewport-sm) {
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  }
}
</style>

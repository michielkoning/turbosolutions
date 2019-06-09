<template>
  <div class="wrapper">
    <home-gallery />
    <home-mobile-workshop />
  </div>
</template>

<script>
import HomeGallery from '@/components/Home/HomeGallery.vue'
import HomeMobileWorkshop from '@/components/Home/HomeMobileWorkshop.vue'
export default {
  components: {
    HomeGallery,
    HomeMobileWorkshop,
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @mixin center var(--container-width-lg);
}
</style>

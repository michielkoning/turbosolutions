<template>
  <notch-wrapper>
    <GmapMap :center="position" :zoom="12" class="map">
      <GmapMarker :position="position"></GmapMarker>
    </GmapMap>
  </notch-wrapper>
</template>

<script>
import NotchWrapper from '@/components/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper,
  },
  data() {
    return {
      position: {
        lat: 52.370216,
        lng: 4.895168,
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
.map {
  width: 100%;
  height: 20em;
}
</style>

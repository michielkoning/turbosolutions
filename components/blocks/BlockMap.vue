<template>
  <GmapMap :options="options" :center="position" :zoom="12" class="map">
    <GmapMarker :position="position"></GmapMarker>
  </GmapMap>
</template>

<script>
export default {
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

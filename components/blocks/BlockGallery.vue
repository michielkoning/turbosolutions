<template>
  <block-wrapper>
    <div class="gallery">
      <skip-link-title
        class="title"
        title="Gamechanging service for turbochargers"
      />
      <img src="/media/images/image-1.jpg" class="image-1" alt="" />
      <img src="/media/images/image-2.jpg" class="image-2" alt="" />
      <img src="/media/images/image-3.jpg" class="image-3" alt="" />
    </div>
  </block-wrapper>
</template>

<script>
import SkipLinkTitle from '@/components/SkipLinkTitle.vue'
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
export default {
  components: {
    SkipLinkTitle,
    BlockWrapper,
  },
}
</script>

<style lang="postcss" scoped>
.gallery {
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'title title'
    'image-1 image-1'
    'image-2 image-3'
    'image-2 image-3';
  @media (--viewport-sm) {
    grid-template-areas:
      'title  image-1'
      'image-2 image-3'
      'image-2 image-3';
  }
  @media (--viewport-md) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'title image-2 image-3'
      'image-1 image-2 image-3';
  }
}

.title {
  grid-area: title;
  align-self: end;
  margin-bottom: 0;
}

.image-1 {
  grid-area: image-1;
}

.image-2 {
  grid-area: image-2;
}

.image-3 {
  grid-area: image-3;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

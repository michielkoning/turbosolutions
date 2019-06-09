<template>
  <block-wrapper>
    <h1>Reviews</h1>
    <h2>Read what people are saying about our company and service.</h2>
    <p class="intro">
      We’ve asked our clients to tell us what we can do better and what they
      think about the service and products we deliver.
    </p>
    <p>
      If you want to share your honest opinion about our company and service,
      please feel free to contact us by sending your review. You can also use
      the contactform at the <nuxt-link to="contact">Contactpage</nuxt-link>.
    </p>
    <ul>
      <li v-for="review in reviews" :key="review.title">
        <app-review :review="review" />
      </li>
    </ul>
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
import AppReview from '@/components/AppReview.vue'

export default {
  components: {
    BlockWrapper,
    AppReview,
  },
  data() {
    return {
      reviews: [
        {
          cite: 'Benelux Powerplants Lorem ipsum dolor',
          title: 'Outstanding service and speed',
          text:
            'Sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        },
        {
          cite: 'TurboCharger Madrid Lorem ipsum dolor',
          title: 'Always spare parts available',
          text:
            'Sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        },
        {
          cite: 'Nuon Lorem ipsum',
          title: '24/7 service is what we needed and what we got',
          text:
            'Dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
ul {
  @mixin list-reset;
}

li {
  margin-bottom: 1em;
  padding: 1em;
  background: #f2f4fb;

  &:nth-child(2n) {
    background: #dadef2;
  }
}
</style>

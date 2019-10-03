<template>
  <block-wrapper>
    <h1>{{ $t('pages.recommendations.title') }}</h1>
    <h2>Read what people are saying about our company and service.</h2>
    <p class="intro">
      {{ $t('pages.recommendations.intro') }}
    </p>
    <p>
      {{ $t('pages.recommendations.text.part1') }}
      <nuxt-link to="contact/">
        {{ $t('pages.recommendations.text.part2') }}
      </nuxt-link>
      {{ $t('pages.recommendations.text.part3') }}
    </p>
    <ul>
      <li v-for="review in recommendations" :key="review.title">
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
    AppReview
  },
  data () {
    return {
      recommendations: [
        {
          rating: 5,
          cite: 'Benelux Powerplants',
          title: 'Outstanding service and speed',
          text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
        },
        {
          rating: 3.5,
          cite: 'TurboCharger Madrid',
          title: 'Always spare parts available',
          text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.'
        },
        {
          cite: 'Nuon',
          rating: 4,
          title: '24/7 service is what we needed and what we got',
          text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
ul {
  @mixin list-reset;
  padding-top: 1em;
}

li {
  padding: var(--gutter) calc(var(--gutter) / 2);
  background: #f2f4fb;
  margin: 0 calc(var(--gutter) / -2) 1em;

  &:nth-child(2n) {
    background: #dadef2;
  }
}
</style>

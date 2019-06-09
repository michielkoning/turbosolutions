<template>
  <footer>
    <notch-wrapper>
      <div class="wrapper">
        <div class="links">
          <h2>Links</h2>
          <ul>
            <li>
              <nuxt-link to="/">{{ $t('home') }} </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/get-to-know-us"
                >{{ $t('getToKnowUs') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/what-we-do">{{ $t('whatWeDo') }} </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/get-to-know-us"
                >{{ $t('mobileWorkshop') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/mobile-workshop">{{ $t('contact') }} </nuxt-link>
            </li>
          </ul>
        </div>
        <company-address />
        <social-links />
      </div>
    </notch-wrapper>
  </footer>
</template>

<script>
import NotchWrapper from '@/components/NotchWrapper.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import CompanyAddress from '@/components/CompanyAddress.vue'

export default {
  components: {
    NotchWrapper,
    SocialLinks,
    CompanyAddress,
  },
}
</script>

<style lang="postcss" scoped>
footer {
  @mixin color-negative;
}

.wrapper {
  @mixin center var(--container-width-lg);
  padding-top: 3em;
  padding-bottom: 3em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
  grid-gap: var(--gutter);
}

ul {
  @mixin list-reset;
}

a {
  box-shadow: 0 1px 0 0 var(--color-white);

  &:hover {
    box-shadow: 0 2px 0 0 var(--color-white);
  }
}
</style>

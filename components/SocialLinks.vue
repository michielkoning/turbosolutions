<template>
  <nav aria-labelledby="social-links-title">
    <h2 id="social-links-title">
      {{ $t('blocks.socialMedia.title') }}
    </h2>
    <ul class="social-links">
      <li>
        <a href="#" rel="noopener" target="_blank">
          <icon-facebook aria-hidden="true" width="32" height="32" />
          <span class="sr-only">
            {{
              $t('blocks.socialMedia.viewUsOn', {
                companyName: $t('address.companyName'),
              })
            }}
            Facebook</span>
        </a>
      </li>
      <li>
        <a href="#" rel="noopener" target="_blank">
          <icon-twitter aria-hidden="true" width="32" height="32" />
          <span class="sr-only">
            {{
              $t('blocks.socialMedia.viewUsOn', {
                companyName: $t('address.companyName'),
              })
            }}
            Twitter</span>
        </a>
      </li>
      <li>
        <a href="#" rel="noopener" target="_blank">
          <icon-linkedin aria-hidden="true" width="32" height="32" />
          <span class="sr-only">
            {{
              $t('blocks.socialMedia.viewUsOn', {
                companyName: $t('address.companyName'),
              })
            }}
            LinkedIn</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconFacebook from '@/assets/icons/facebook.svg'
import IconTwitter from '@/assets/icons/twitter.svg'
import IconLinkedin from '@/assets/icons/linkedin.svg'

export default {
  components: {
    IconFacebook,
    IconTwitter,
    IconLinkedin
  }
}
</script>

<style lang="postcss" scoped>
ul {
  @mixin list-reset;

  display: flex;
  margin-bottom: 1em;
}

a {
  @mixin link-reset;
  margin-right: 0.5em;
}
</style>

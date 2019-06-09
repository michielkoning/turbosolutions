<template>
  <div>
    <h2>Adres</h2>
    <address itemscope itemtype="http://schema.org/Organization">
      <p
        itemprop="address"
        itemscope
        itemtype="http://schema.org/PostalAddress"
      >
        <span class="text">
          <icon-building aria-hidden="true" width="20" height="20" />
          <span itemprop="name">Turbo solutions</span><br />
          <span itemprop="streetAddress">Street</span><br />
          <span itemprop="locality">City</span>,
          <span itemprop="postal-code">Zipcode</span>
        </span>
      </p>
      <p>
        <span class="text">
          <icon-envelope aria-hidden="true" width="20" height="20" />
          <a href="tel:+34 674 14 71 73" itemprop="telephone">
            +34 674 14 71 73
          </a>
        </span>
        <span class="text">
          <icon-phone aria-hidden="true" width="20" height="20" />
          <a href="mailto:dexter@turbosolutionseurope.com" itemprop="email"
            >dexter@turbosolutionseurope.com
          </a>
        </span>
      </p>
    </address>
  </div>
</template>
<script>
import IconEnvelope from '@/assets/icons/envelope.svg'
import IconPhone from '@/assets/icons/phone.svg'
import IconBuilding from '@/assets/icons/building.svg'

export default {
  components: {
    IconEnvelope,
    IconPhone,
    IconBuilding,
  },
}
</script>

<style lang="postcss" scoped>
p {
  margin-bottom: 0.5em;
}

.text {
  position: relative;
  padding-left: 1.5em;
  display: block;
}

svg {
  position: absolute;
  left: 0;
  top: 0.25em;
}

a {
  word-wrap: break-word;
}
</style>

<template>
  <div>
    <h2>Adres</h2>
    <address itemscope itemtype="http://schema.org/Organization">
      <p itemprop="name">Turbo solutions</p>
      <p
        itemprop="address"
        itemscope
        itemtype="http://schema.org/PostalAddress"
      >
        <span itemprop="streetAddress">Street</span><br />
        <span itemprop="locality">City</span>,
        <span itemprop="postal-code">Zipcode</span>
      </p>
      <p>
        <a href="tel:+34 674 14 71 73" itemprop="telephone">+34 674 14 71 73 </a
        ><br />
        <a href="mailto:dexter@turbosolutionseurope.com" itemprop="email"
          >dexter@turbosolutionseurope.com</a
        ><br />
      </p>
    </address>
  </div>
</template>

<style lang="postcss" scoped>
p {
  margin-bottom: 0.5em;
}
</style>

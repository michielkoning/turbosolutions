<template>
  <nav aria-labelledby="menu-title">
    <h2 id="menu-title" class="sr-only" tabindex="-1">
      {{ $t('mainNavigation') }}
    </h2>
    <ul ref="list">
      <li>
        <nuxt-link id="menu" to="/">
          <span class="title" :class="{ 'link-active': isCurrentStep(0) }">{{
            $t('home')
          }}</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/get-to-know-us">
          <span class="title" :class="{ 'link-active': isCurrentStep(1) }">
            {{ $t('getToKnowUs') }}
          </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/what-we-do">
          <span class="title" :class="{ 'link-active': isCurrentStep(2) }">
            {{ $t('whatWeDo') }}
          </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/mobile-workshop">
          <span class="title" :class="{ 'link-active': isCurrentStep(3) }">
            {{ $t('mobileWorkshop') }}
          </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">
          <span class="title" :class="{ 'link-active': isCurrentStep(4) }">
            {{ $t('contact') }}
          </span>
        </nuxt-link>
      </li>
    </ul>
    <div
      class="arrow"
      :class="{ active: mounted }"
      :style="{ transform: arrowPosition, width: arrowWidth }"
    />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      arrowPosition: 0,
      arrowWidth: 0,
      mounted: false
    }
  },

  computed: {
    step() {
      return this.$store.state.step
    }
  },
  watch: {
    $route() {
      this.setArrowPosition()
    }
  },
  mounted() {
    this.setArrowPosition()
    setTimeout(() => {
      this.mounted = true
    }, 0)
  },
  methods: {
    isCurrentStep(step) {
      return this.step === step
    },
    setArrowPosition() {
      const activeLink = this.$refs.list.querySelector(
        `:nth-child(${this.step + 1}`
      )
      this.arrowPosition = `translateX(${activeLink.offsetLeft}px)`
      this.arrowWidth = `${activeLink.offsetWidth}px`
    }
  }
}
</script>

<style lang="postcss" scoped>
nav {
  position: relative;
}

ul {
  @mixin list-reset;

  display: flex;
  border-top: 1px dashed var(--color-gray);

  @media (--navigation-position-left) {
    border-top: 0;
  }
}

.title {
  transition: box-shadow 0.1s ease-out;
  &.link-active {
    box-shadow: 0 2px 0 0 var(--color-primary);
  }
}

li + li {
  margin-left: 1em;
}

a {
  @mixin link-reset;

  align-items: center;
  display: flex;
  position: relative;
  text-decoration: none;
  font-size: 1.2em;
  line-height: 1.1;
  padding: 0.45em 0;
  border-bottom: 1px dashed var(--color-gray);

  &:hover {
    text-decoration: none;
    & .title {
      box-shadow: 0 3px 0 0 var(--color-primary);
    }
  }
  @media (--navigation-position-left) {
    border-bottom: 0;
    padding: 0.25em 0;
  }
}

.arrow {
  width: 1em;
  height: 2px;
  background: currentColor;

  &.active {
    transition: all 0.2s ease-out;
  }
}
</style>

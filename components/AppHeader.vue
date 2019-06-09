<template>
  <header>
    <skip-links />
    <mobile-navigation @toggleMenu="toggleMenu" />
    <nuxt-link to="/">
      <icon-logo aria-hidden="true" width="156" height="88" />
    </nuxt-link>

    <transition
      name="fade2"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <div v-show="showMenu" class="bg">
        <transition name="fade">
          <div v-show="showMenu" ref="bg" class="content">
            <main-navigation />
            <app-usps class="usps" />
          </div>
        </transition>
      </div>
    </transition>
  </header>
</template>

<script>
import SkipLinks from '@/components/SkipLinks.vue'
import MainNavigation from '@/components/MainNavigation.vue'
import AppUsps from '@/components/AppUsps.vue'
import MobileNavigation from '@/components/MobileNavigation.vue'
import IconLogo from '@/assets/icons/logo.svg'

const bodyScrollLock = require('body-scroll-lock')

export default {
  components: {
    SkipLinks,
    MainNavigation,
    MobileNavigation,
    AppUsps,
    IconLogo,
  },
  data() {
    return {
      showMenu: false,
    }
  },

  methods: {
    toggleMenu(status) {
      this.showMenu = status
    },
    afterEnter() {
      const bg = this.$refs.bg
      bodyScrollLock.disableBodyScroll(bg)
    },
    beforeLeave() {
      const bg = this.$refs.bg
      bg.scrollTop = 0
    },
    afterLeave() {
      const bg = this.$refs.bg
      bodyScrollLock.enableBodyScroll(bg)
    },
  },
}
</script>

<style lang="postcss" scoped>
header {
  display: flex;
  @mixin center;
}

.content {
  @mixin color-negative;
  padding: 5em var(--gutter) var(--gutter);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 100vh;

  @media (--navigation-position-left) {
    padding: var(--gutter);
    flex-direction: column;
    overflow: visible;
    transform: translateY(0);
    display: flex !important;
    align-items: flex-end;
    max-height: none;
  }
}

.usps {
  order: -1;
}

a {
  @mixin link-reset;
}

.bg {
  flex: 1 1 auto;
  background: var(--color-primary);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
  z-index: var(--main-navigation);
  padding: 0 env(safe-area-inset-right) 0 env(safe-area-inset-left);

  @media (--navigation-position-left) {
    height: auto;
    position: static;
    padding: 0;
    overflow: visible;
    display: block !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s 0.2s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(-2em);
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: transform 0.3s;
}

.fade2-enter,
.fade2-leave-to {
  transform: translateY(-100vh);
}
</style>

<template>
  <div :class="{ active: message.length }" class="alert">
    <notch-wrapper>
      <div class="content">
        <span class="text" aria-live="polite" role="region">{{ message }}</span>

        <button v-if="message" @click="dismiss" type="button" class="dismiss">
          <icon-close aria-hidden="true" width="24" height="24" />
          <span class="sr-only">{{ $t('errorHandler.close') }}</span>
        </button>
      </div>
    </notch-wrapper>
  </div>
</template>

<script>
import EventBusUtil from '@/utils/eventBusUtil'
import IconClose from '@/assets/icons/close.svg'
import NotchWrapper from '@/components/NotchWrapper.vue'

export default {
  components: {
    IconClose,
    NotchWrapper
  },
  data () {
    return {
      message: ''
    }
  },
  created () {
    EventBusUtil.$on('axios-interceptor-throws-error', error =>
      this.handleError(error)
    )
  },
  methods: {
    handleError (err) {
      this.message = err.message
    },
    dismiss () {
      this.message = ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.alert {
  &.active {
    position: fixed;
    bottom: 0;
    font-size: 1.25em;
    left: 0;
    right: 0;
    z-index: var(--error-handler);
    padding: 0.5em 0.25em;
    background: var(--color-bg-page);
    border-top: 2px solid var(--color-white);
  }
}

.content {
  display: flex;
  text-align: center;
}

button {
  order: -1;
  margin: 0.25em 0.25em 0 0;
}

.text {
  flex: 1 1 auto;
  text-align: center;
}
</style>

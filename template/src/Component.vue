<template>
  <div>
    <cdr-text
      tag="h1"
      class="cdr-align-text-center"
      modifier="heading-serif-strong-700"
    >
      {{ title }}
    </cdr-text>
    <cdr-text modifier="body-300">
      {{ description }}
    </cdr-text>
  </div>
</template>

<script>
import { CdrText } from '@rei/cedar';

export default {
  name: 'MainComponent',
  components: {
    CdrText,
  },
  props: {
    title: String,
    description: String,
  },
};
</script>

<style lang="scss">
@import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
</style>

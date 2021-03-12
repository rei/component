<template>
  <div>
    <cdr-text
      tag="h1"
      class="header"
    >
      {{ title }}
    </cdr-text>
    <cdr-text class="body">
      {{ description }}
    </cdr-text>
    <cdr-link href="rei.com">homepage</cdr-link>
    <slot/>
  </div>
</template>

<script>
import { CdrText, CdrLink } from '@rei/cedar';

export default {
  name: 'MainComponent',
  components: {
    CdrText,
    CdrLink,
  },
  props: {
    title: String,
    description: String,
  },
};
</script>

<style lang="scss">
@import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
.header {
  @include cdr-text-heading-serif-strong-700;
  text-align: center;
}

.body {
  @include cdr-text-body-300;
}
</style>

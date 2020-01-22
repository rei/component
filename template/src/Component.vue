<template>
  <div>
    <cdr-text
      tag="h1" modifier="" class="cdr-align-text-center"
    >
      {{title}}
    </cdr-text>
    <cdr-text modifier="">{{description}}</cdr-text>
  </div>
</template>

<script>
import { CdrText } from '@rei/cedar';
export default {
  name: 'MainComponent',
  components: {
    CdrText
  },
  props: ['title','description'],
}
</script>

<style lang="scss">
@import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
</style>

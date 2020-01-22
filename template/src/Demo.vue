<template>
  <{{pascalcase name}} :title="title" :description="description" />
</template>

<script>
// import compiled component from dist
import {{pascalcase name}} from '../'; // TODO replace Component with pascalCase or whatever?
export default {
  name: 'Demo',
  components: {
    {{pascalcase name}}
  },
  data() {
    return {
      title: 'REI Component Template',
      description: 'A Vue-CLI template for generating shared component packages'
    }
  },
}
</script>

<style lang="scss">
@import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
</style>

<script>
import {
  CdrButton,
  CdrText,
  IconCheckFill,
  IconXFill,
} from '@rei/cedar';
import SampleChildComponent from './SampleChildComponent.vue';

export default {
  name: 'SampleComponent',
  components: {
    CdrButton,
    IconCheckFill,
    IconXFill,
    CdrText,
    SampleChildComponent,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title Not Set',
    },
    description: {
      type: String,
      default: 'Description not set',
    },
    accordionLabel: {
      type: String,
      required: true,
    },
    faqs: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      showFaqs: true,
      selectedStore: null,
    };
  },
  computed: {
    toggleBtnText() {
      return this.showFaqs ? 'Hide FAQs' : 'Show FAQs';
    },
  },
  methods: {
    toggleFaqs() {
      this.showFaqs = !this.showFaqs;
    },
  },
};
</script>
<template>
  <div class="sample-component">
    <cdr-text
      tag="h1"
      modifier="display"
    >
      {{ title }}
    </cdr-text>
    <cdr-text
      tag="p"
      modifier="body"
    >
      {{ description }}
    </cdr-text>
    <sample-child-component
      v-if="showFaqs"
      :faqs="faqs"
      :accordion-label="accordionLabel"
      class="cdr-stack"
    />
    <cdr-button :on-click="toggleFaqs">
      <icon-x-fill
        v-if="showFaqs"
        slot="icon"
        class="cdr-button__icon"
        inherit-color
      />
      <icon-check-fill
        v-else
        slot="icon"
        class="cdr-button__icon"
        inherit-color
      />
      {{ toggleBtnText }}
    </cdr-button>
  </div>
</template>
<style lang="scss">
@import '../globals.scss';
// cedar tokens imported into globals.scss available here
.cdr-button {
  &__icon {
    fill: $clean-slate;
  }
}
</style>

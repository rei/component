<script>
import { CdrText, CdrAccordion } from '@rei/cedar';

export default {
  name: 'SampleChildComponent',
  components: {
    CdrAccordion,
    CdrText,
  },
  props: {
    faqs: {
      type: Array,
      required: false,
      default: () => [],
    },
    accordionLabel: {
      type: String,
      required: true,
      default: 'Accordion Label Not Set',
    },
  },
  computed: {
    cleanedFaqs() {
      return this.faqs.filter(faq => faq.question && faq.answer);
    },
  },
};
</script>
<template>
  <div class="child-component">
    <cdr-text modifier="body">
      {{ accordionLabel }}
    </cdr-text>
    <div v-if="faqs">
      <cdr-accordion
        v-for="(faq, i) in cleanedFaqs"
        :id="`faq-item-${i}`"
        :key="`faq-${i}`"
        :label="faq.question"
        :compact="true"
      >
        <cdr-text tag="p">
          {{ faq.answer }}
        </cdr-text>
      </cdr-accordion>
    </div>
    <div v-else>
      No FAQs found.
    </div>
  </div>
</template>

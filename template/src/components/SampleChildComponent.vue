<script>
import { CdrAccordion, CdrAccordionItem, CdrText } from '@rei/cedar';

export default {
  name: 'SampleChildComponent',
  components: {
    CdrAccordion,
    CdrAccordionItem,
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
    <div
      v-if="faqs && cleanedFaqs.length"
      data-ui="faq-section"
    >
      <cdr-accordion :compact="true">
        <cdr-accordion-item
          v-for="(faq, i) in cleanedFaqs"
          :id="`faq-item-${i}`"
          :key="`faq-${i}`"
          :label="faq.question"
        >
          <cdr-text tag="p">
            {{ faq.answer }}
          </cdr-text>
        </cdr-accordion-item>
      </cdr-accordion>
    </div>
    <div v-else>
      No FAQs found.
    </div>
  </div>
</template>

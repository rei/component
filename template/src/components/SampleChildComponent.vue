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
    },
    accordionLabel: {
      type: String,
      required: true,
      default: 'Accordion Label Not Set',
    },
  },
};
</script>
<template>
  <div class="child-component">
    <cdr-text modifier="body">{{ accordionLabel }}</cdr-text>
    <div v-if="faqs">
      <cdr-accordion :compact="true">
        <cdr-accordion-item
          v-for="(faq, i) in faqs"
          v-if="faq.question && faq.answer"
          :key="`faq-${i}`"
          :id="`faq-item-${i}`"
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

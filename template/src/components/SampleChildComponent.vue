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
  data() {
    return {
      // note that this will not dynamically update if `faqs` change,
      // add a Vue watcher to handle that if needed
      cleanedFaqs: this.faqs
        .filter(faq => faq.question && faq.answer)
        .map(faq => Object.assign({ opened: false }, faq)),
    }
  },
};
</script>
<template>
  <div class="child-component">
    <cdr-text modifier="body-300">
      {{ accordionLabel }}
    </cdr-text>
    <div v-if="faqs">
      <cdr-accordion
        v-for="(faq, i) in cleanedFaqs"
        :id="`faq-item-${i}`"
        :key="`faq-${i}`"
        :label="faq.question"
        :compact="true"
        :opened="faq.opened"
        @accordion-toggle="faq.opened = !faq.opened"
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

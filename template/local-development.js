import Vue from 'vue';
{{#if_eq addHeaderFooter true}}
import HeaderFooter from '@rei/dev-header-footer'
{{/if_eq}}

/* Bring in external style sheets here that aren't explicitly imported elsewhere.
 * This file is only for local dev and does not generate any distribution CSS bundles
 * include the styles below in the consuming project as needed per that project's bundling methods
 {{#if_eq addComponents false}}*e.g.: import '@rei/cdr-assets/dist/cdr-core.css';{{/if_eq}}
 */
{{#if_eq addComponents true}}
import '@rei/cdr-assets/dist/cdr-core.css';
import '@rei/cdr-assets/dist/cdr-fonts.css';
import '@rei/cdr-accordion/dist/cdr-accordion.css';
import '@rei/cdr-button/dist/cdr-button.css';
import '@rei/cdr-icon/dist/cdr-icon.css';
import '@rei/cdr-cta/dist/cdr-cta.css';
{{/if_eq}}
/* Local components that import css will bundle styles to this file  */
import './dist/index.css'

/* Bring in entry component here - from 'main' field in package.json*/
import MainComponent from '.';

Vue.config.productionTip = false;
const options = {
  title: '{{name}}',
  description: '{{description}}',
  {{#if_eq addComponents true}}
  accordionLabel: 'Example child component label',
  faqs: [
    {
    question: 'How do i do this?',
    answer: 'This is how.',
    id: '1',
    },
    {
    question: 'When?',
    answer: 'The time is now.',
    id: '2',

    },
    {
    question: 'Where?',
    answer: 'Anywhere you can make it happen.',
    id: '3',
   },
  ]
  {{/if_eq}}
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render(h){
    {{#if_eq addHeaderFooter true}}
    return h(HeaderFooter, [h(MainComponent, { class: 'container', props: { ...options } })])
    {{/if_eq}}
    {{#if_eq addHeaderFooter false}}
    return h(MainComponent, { props: { ...options } })
    {{/if_eq}}
  }
});

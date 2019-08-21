import Vue from 'vue';

/* Bring in external style sheets here that aren't explicitly imported elsewhere.
 * This file is only for local dev and does not generate any distribution CSS bundles
 * include the styles below in the consuming project as needed per that project's bundling methods
 {{#if_eq addComponents false}}*e.g.: import '@rei/cdr-assets/dist/cdr-core.css';{{/if_eq}}
 */
{{#if_eq addComponents true}}
import '@rei/cedar/dist/cedar.css';
import '@rei/cedar/dist/cdr-fonts.css';
{{/if_eq}}
{{#if_eq useRollup true}}
/* Local components that import css will bundle styles to this file  */
import './dist/index.css';
{{/if_eq}}

/* Bring in entry component here - from 'main' field in package.json*/
import MainComponent from '.';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { MainComponent },
});

import Vue from 'vue';

/* Bring in external style sheets here that aren't explicitly imported elsewhere.
 * This file is only for local dev and does not generate any distribution CSS bundles
 * include the styles below in the consuming project as needed per that project's bundling methods
 */
import '@rei/cedar/dist/cdr-fonts.css';
import '@rei/cedar/dist/style/reset.css';

/* load the compiled CSS for this component */
import './dist/index.css';
/* Bring in entry component here - from 'main' field in package.json*/
import MainComponent from '.';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { MainComponent },
});

import './main.scss';
/* export main component from here */
{{#if_eq addComponents false}}export { default } from './components/{{pascalcase name}}.vue';{{/if_eq}}{{#if_eq addComponents true}}export { default } from './components/SampleComponent.vue';{{/if_eq}}

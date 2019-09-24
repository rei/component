// TODO move dev assets to dev folder and serve from there
module.exports = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: "javascript/auto",
      },
    ],
  },
  devServer: {
    open: true,
  {{#if_eq addHeaderFooter true}}
    before(app) {
      const fetch = require('isomorphic-fetch');
      const apicache = require('apicache');

      // apicache is used to store the header/footer markup in memory
      const cache = apicache.options({
        debug: true,
      }).middleware;

      app.use(require('morgan')('dev')); // used for logging

      // fetch and cache markup using express endpoints
      app.get('/footer', cache(), (req, res) => {
        fetch(
          'https://tcommon-components-site.rei-cloud.com/rs/components/common/navigation/footer/shop'
        )
          .then(data => data.text())
          .then(body => res.send(body));
      });
      app.get('/unav', cache(), (req, res) => {
        fetch(
          'https://tcommon-components-site.rei-cloud.com/rs/components/common/navigation/universal/shop'
        )
          .then(data => data.text())
          .then(body => res.send(body));
      });
      app.get('/gnav', cache(), (req, res) => {
        fetch(
          'https://tcommon-components-site.rei-cloud.com/rs/components/common/navigation/global/shop'
        )
          .then(data => data.text())
          .then(body => res.send(body));
      });
    },
    {{/if_eq}}
  },
};

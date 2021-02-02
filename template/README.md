# {{ name }}
{{ description }}

## To Get Started
* Run `npm run dev` to run the component locally. (See local development below)

### Loading Cedar

This project loads [@rei/cedar components](https://github.com/rei/rei-cedar) and [@rei/cdr-tokens](https://github.com/rei/rei-cedar-tokens) by default. If either of these packages are not required for your component, you should delete their entries from the package.json. Note that Cedar CSS must be manually loaded for each part of Cedar that is used. See [src/main.scss](./blob/master/template/src/main.scss) for an example of how this is done or the [Cedar getting started as a developer guide](https://rei.github.io/rei-cedar-docs/getting-started/as-a-developer) for more information on using cedar.

### Build system

This component only contains a build system for distribution and another for development.
`rollup` is used for distribution, as `webpack` does not currently export `ES6` modules. `febs` is used for the local dev server as it is anticipated the final application will be bundled using `febs`.

## Local Development
``` bash
# create a dev bundle and serve with febs from localhost:8080 with watchers
npm run dev

# create a dev bundle in watch mode without the server
npm run dev:build

# only run the dev server in watch mode without building new files
npm run dev:server

# delete the dist folder and run dev build and server
npm run dev:clean

# lint files with es-lint
npm run lint

# build for production with minification with rollup
npm run build

# run unit tests from files in /test with filenames *.spec.js
npm run test

```
## About the Example Files in this project
* The `local-development.js` and `index.html` are used for local development only.
  * Commits are fine for these files as they are not built into the distribution
* Use the `index.html` for passing example data into your component.
  * Should be used for testing or demonstrating how the component works with prop data
* Use `local-development.js` for bringing in dependent styles from other packages for local development
  * Styles for external modules should be brought into the `local-development.js` so you can locally develop and see the styles. The project that consumes the component will bring those styles in separately so that they can manage the resource bundling that makes sense for their project.
  * Styles for single file components should use the style tag in `.vue` files rather than a separate style sheet. This plays nicer for projects that use different style loaders or configurations and the bundle becomes more portable.
* `{{pascalcase name}}.vue` is the main Vue application.
  * Sub components should be used to help organize rather than creating multiple components brought in through a single npm bundle.
  * A new repository would be suggested for each component so that they can be individually versioned, bundled and distributed.

### Project Structure
```
.
├── index.html // local dev html file
├── local-development.js // local dev container file
├── src
│   ├── {{pascalcase name}}.vue // Component source code
│   ├── Demo.vue // Vue component used for the local development server
│   ├── index.js // component entry file, exports Vue component and styles
│   ├── main.scss // root styles
├── test
│   └── // spec files and test utilities
├── package-lock.json
├── package.json
├── rollup.config.js
├── febs-config.json
└── webpack.overrides.conf.js
```

# JS packages used
* [Vue.js](https://github.com/vuejs/vue#readme)
* [eslint](https://eslint.org/)
* [febs](https://github.com/rei/febs#readme)
* [vunit](https://github.com/rei/vunit)
* [vue-test-utils](https://vue-test-utils.vuejs.org/)
* [chai](https://www.chaijs.com/)
* [scss](https://sass-lang.com/)
* [postcss](https://postcss.org/)

## <a name="contributing" href="#contributing">Contributing</a>

Please read and familiarize yourself with our basics before contributing:

* [npm packages at REI](https://confluence.rei.com/display/FED/npm+packages+at+REI)
* [Style guides](https://github.com/rei/code-style-guides)
* [Unit testing](https://confluence.rei.com/display/FED/Unit+Testing+on+the+Frontend)
* [Semver versioning](http://semver.org/)

### Example Publishing workflow

> **Make certain you are updating the version tag before you merge to master branch.**

* Update the version according to [semver](http://semver.org/) with `npm version <newversion>`. More on `npm version` [here](https://docs.npmjs.com/cli/version)
* `git commit` your changes (with version tag!) and meaningful message. Please `squash` unnecessary or confusing commits.
* `git push` your branch and open an PR to `master`. List at least one of the maintainers as a reviewer.

* After approval, `merge` to master. A Jenkins job will kick off and your new version will be published to the private registry.
* Update any apps that consume the package and/or notify other maintainers that a new version has been published

## <a name="author" href="#author">Contributors</a>
{{author}}

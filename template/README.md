# {{ name }}
{{ description }}

## To Get Started
* Run `npm run dev` to run the component locally. (See local development below)

### Rename Component:
Some component properties couldn't be named during template creation.
* Rename the `name` field in {{pascalcase name}}.vue file to your preferred component name from 'MainComponent'.
  * Make sure to update the index.html from `<main-component>` to match your new component name.

## Local Development
``` bash
{{#if_eq useRollup true}}
# create a dev bundle and serve with febs from localhost:8080 with watchers
npm run dev

# create a dev bundle in watch mode without the server
npm run dev:build

# only run the dev server in watch mode without building new files
npm run dev:server

# delete the dist folder and run dev build and server
npm run dev:clean
# run in dev serve with webpack from auto-assigned port listed in console

# build for production with minification with rollup
npm run build
{{else}}
npm run dev
{{/if_eq}}

# lint files with es-lint
npm run lint

# run unit tests from files in /test with filenames *.spec.js
npm run test

```
## About the Example Files in this project
* the `local-development.js` and `index.html` are used for local development only.
  * Commits are fine for these files as they are not built into the distribution
* use the `index.html` for passing example data into your component.
  * Should be used for testing or demonstrating how the component works with prop data
* use `local-development.js` for bringing in dependent styles from other packages for local development
  * styles for external modules should be brought into the `local-development.js` so you can locally develop and see the styles. The project that consumes the component will bring those styles in separately so that they can manage the resource bundling that makes sense for their project.
  * styles for single file components should use the style tag in `.vue` files rather than a separate style sheet. This plays nicer for projects that use different style loaders or configurations and the bundle becomes more portable.
  * for now we are recommending building a distributed CSS file for this components styles as it is easier to import the component with other projects.
* `{{pascalcase name}}.vue` is the main Vue application.
  * Sub components should be used to help organize rather than creating multiple components brought in through a single npm bundle.
  * A new repository would be suggested for each component so that they can be individually versioned, bundled and distributed.
  * exclusions to this idea would be more complex examples like the `cdr-accordion` in this example or `cdr-grid`, `cdr-row` and `cdr-col` where the component may be structured in complex ways that are not easily done through props.

# install any cedar components you plan to use either one by one or bulk
`npm i -S @rei/cdr-link`
- or bulk like so
`npm i -S @rei/cdr-{assets,button,col,grid,row,tokens,text,img,link}`

### Project Structure
```
.
├── index.html // local dev html file
├── local-development.js // local dev container file
├── src
│   ├── components
│   │   └── // component vue files
│   ├── index.js // root component file
│   ├── globals.scss // root styles
├── test
│   └── // spec files and test utilities
├── package-lock.json
├── package.json
├── rollup.config.js
├── febs-config.json
└── webpack.overrides.conf.js

// note: not all config files included
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

* [Updating code in FEDPACK Repositories](https://confluence.rei.com/display/FED/Updating+Code+in+FEDPACK+Repositories)
* [Updating npm Dependencies](https://confluence.rei.com/display/FED/Updating+npm+Dependencies)
* [Style guides](https://github.com/rei/code-style-guides)
* [Unit testing](https://confluence.rei.com/display/FED/Unit+Testing+on+the+Frontend)
* [Updating tags](https://confluence.rei.com/display/FED/Updating+Code+in+FEDPACK+Repositories#UpdatingCodeinFEDPACKRepositories-git-tag)
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

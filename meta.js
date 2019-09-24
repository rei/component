const fs = require('fs');
const path = require('path');

const toPascal = function(str) {
  return str
    .replace(/([\-_\s]+[a-z])|(^[a-z])/g, $1 => $1.toUpperCase())
    .replace(/[\-_\s]+/g, '');
};

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Component name (kebab-case format)',
      default: 'my-component-name',
      message:
        'The name of the new component. Kebab-cased name will be used to generate relevant file names and imports, so choose carefully!.',
    },
    description: {
      type: 'string',
      required: true,
      label: 'Component description',
      default: 'An REI Cedar component built on Vue.js ',
    },
    author: {
      type: 'string',
      label: 'Author',
    },
    addHeaderFooter: {
      type: 'boolean',
      required: true,
      label: 'Include dev header/footer?',
      default: true,
    },
    addComponents: {
      type: 'boolean',
      required: true,
      label: 'Include sample Vue components?',
      default: true,
    },
  },
  helpers: {
    pascalcase: toPascal,
  },
  filters: {
    'src/components/Sample*.*': 'addComponents',
  },
  skipInterpolation: 'src/**/*.vue',
  complete: function(data, { logger, chalk }) {
    // Rename to be compatible with styleguide configuration
    const cmpDir = data.inPlace
      ? 'src/components'
      : path.resolve(data.destDirName, 'src/components');
    const testDir = data.inPlace
    ? 'test'
    : path.resolve(data.destDirName, 'test');

    const pascalName = toPascal(data.name);
    fs.renameSync(
      path.resolve(cmpDir, 'Component.vue'),
      path.resolve(cmpDir, pascalName + '.vue'),
    );
    fs.renameSync(
      path.resolve(testDir, 'Component.spec.js'),
      path.resolve(testDir, pascalName + '.spec.js'),
    );
    logger.log(chalk.bold('To get started:'));
    if (!data.inPlace) logger.log(chalk.green('cd ' + data.destDirName));

    const logFiles = {
      component: path.relative(
        data.destDirName,
        path.resolve(data.destDirName, 'src/components', pascalName + '.vue'),
      ),
    };
    logger.log(chalk.green('npm install'));
    logger.log(chalk.green('npm run dev'));
    logger.log(chalk.cyan('Write your component in ' + logFiles.component));
    logger.log(chalk.cyan('Write the demo and usage instructions in src/README.md'));
    logger.log(chalk.cyan('Build for distribution:'));
    logger.log(chalk.green('npm run build'));

  },
};

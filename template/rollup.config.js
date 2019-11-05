/* eslint-env node */
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import path from 'path';
import autoprefixer from 'autoprefixer';
import rollupPluginCommonjs from 'rollup-plugin-commonjs';
import packageJson from './package.json';
import VuePlugin from 'rollup-plugin-vue';

const { dependencies = {}, peerDependencies = {} } = packageJson;

const externals = Object.keys(
  Object.assign({}, dependencies, peerDependencies),
);

const nodeModules = path.resolve('./node_modules');

export default {
  input: './src/index.js',
  output: [
    {
      sourcemap: true,
      dir: './dist',
      format: 'cjs',
      entryFileNames: '[name].js'
    },
    {
      sourcemap: true,
      dir: './dist',
      format: 'es',
      entryFileNames: '[name].esm.js'
    },
  ],
  external: id => externals.some(dep => dep === id || id.startsWith(`${dep}/`)),
  onwarn(warning) {
    if (warning.code === 'UNRESOLVED_IMPORT') throw new Error(warning.message);
    // eslint-disable-next-line no-console
    console.warn(warning.message);
  },
  plugins: [
    babel({
      exclude: nodeModules,
      runtimeHelpers: true,
    }),
    rollupPluginCommonjs({
      extensions: ['.js',],
    }),
    resolve({
      extensions: ['.mjs', '.js', '.vue'],
    }),
    postcss({
      extract: path.resolve('./dist/index.css'),
      inject: false,
      plugins: [autoprefixer()],
      // uncomment the modules property if you want to import css module files into your js instead of SFC styles
      // modules: {
      //   generateScopedName:
      //     process.env.NODE_ENV === 'dev'
      //       ? '[name]-[local]'
      //       : '[md5:hash:base64:16]',
      // },
    }),
    VuePlugin({
      needMap: false,
      css: false,
      style: {
        generateScopedName:
          process.env.NODE_ENV === 'dev' ? '[name]-[local]' : '[md5:hash:base64:16]',
      },
    }),
  ],
};

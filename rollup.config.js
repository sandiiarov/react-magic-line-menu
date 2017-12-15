import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import inject from 'rollup-plugin-inject';
import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';

const processShim = '\0process-shim';

const prod = process.env.PRODUCTION;
const esbundle = process.env.ESBUNDLE;

let output;
if (prod) {
  // eslint-disable-next-line no-console
  console.log('Creating production UMD bundle...');
  output = { file: 'dist/react-magic-line-menu.min.js', format: 'umd' };
} else if (esbundle) {
  // eslint-disable-next-line no-console
  console.log('Creating ES modules bundle...');
  output = { file: 'dist/react-magic-line-menu.es.js', format: 'es' };
} else {
  // eslint-disable-next-line no-console
  console.log('Creating development UMD bundle');
  output = { file: 'dist/react-magic-line-menu.js', format: 'umd' };
}

const plugins = [
  {
    resolveId(importee) {
      if (importee === processShim) {
        return importee;
      }

      return null;
    },
    load(id) {
      if (id === processShim) {
        return 'export default { argv: [], env: {} }';
      }

      return null;
    },
  },
  flow(),
  nodeResolve(),
  replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  inject({ process: processShim }),
  babel({ babelrc: true }),
  commonjs({ ignoreGlobal: true }),
  minify(),
];

export default {
  input: 'src/index.js',
  external: ['react', 'animejs'].concat(
    esbundle ? Object.keys(pkg.dependencies) : []
  ),
  exports: 'named',
  output: {
    ...output,
    name: 'react-magic-line-menu',
  },
  plugins,
  globals: { react: 'React', animejs: 'anime' },
};

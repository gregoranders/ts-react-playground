/* eslint-disable @typescript-eslint/no-var-requires */
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

const isProduction = process.env.NODE_ENV === 'production';

console.log('Production:', isProduction);

const exported = [
  {
    name: '@material-ui/core',
    output: '@material-ui/core',
    external: ['react', 'react-is', 'react-dom', 'prop-types', '@material-ui/styles'],
    exports: {
      '@material-ui/core': Object.keys(require('@material-ui/core')),
    },
  },
  {
    name: '@material-ui/styles',
    output: '@material-ui/styles',
    external: ['react', 'react-is', 'prop-types'],
    exports: {
      '@material-ui/styles': Object.keys(require('@material-ui/styles')),
    },
  },
  {
    name: '@material-ui/lab',
    output: '@material-ui/lab',
    external: [
      'react',
      'react-is',
      'react-dom',
      'prop-types',
      '@material-ui/core',
      '@material-ui/icons',
      '@material-ui/styles',
    ],
    exports: {
      '@material-ui/lab': Object.keys(require('@material-ui/lab')),
    },
  },
  {
    name: 'gsap',
    external: [],

    exports: {},
  },
].map(({ name, external, output }) => ({
  input: `src/vendor/${name}/index.tsx`,
  external,
  output: [
    {
      file: output ? `public/vendor/${output}.js` : `public/vendor/${name}.js`,
      format: 'esm', // 'cjs' | 'umd' | 'iife' | 'es' | 'esm'
      exports: 'named',
      name,
      sourcemap: isProduction ? false : true,
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
    }),
    resolve({
      preferBuiltins: false,
    }),
    json(),
    typescript({
      tsconfig: `src/vendor/${name}/tsconfig.json`,
      sourceMap: isProduction ? false : true,
    }),
    commonjs({
      include: ['node_modules/**'],
    }),
  ],
}));

export default [...exported];

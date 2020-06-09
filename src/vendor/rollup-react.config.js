/* eslint-disable @typescript-eslint/no-var-requires */
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

const isProd = process.env.NODE_ENV === 'production';

console.log('Production:', isProd);

const exported = [
  {
    name: 'object-assign',
    external: [],
    exports: {
      react: Object.keys(require('object-assign')),
    },
  },
  {
    name: 'scheduler',
    external: [],
    exports: {
      react: Object.keys(require('scheduler')),
    },
  },
  {
    name: 'react',
    external: ['object-assign', 'prop-types'],
    exports: {
      react: Object.keys(require('react')),
    },
  },
  {
    name: 'react-is',
    external: [],
    exports: {
      'react-is': Object.keys(require('react-is')),
    },
  },
  {
    name: 'react-dom',
    external: ['react', 'object-assign', 'scheduler'],
    exports: {
      'react-dom': Object.keys(require('react-dom')),
    },
  },
  {
    name: 'react-router',
    external: ['react', 'react-is', 'react-dom', 'prop-types'],
    exports: {
      'react-router': Object.keys(require('react-router')),
    },
  },
  {
    name: 'react-router-dom',
    external: ['react', 'react-is', 'react-dom', 'react-router', 'prop-types'],
    exports: {
      'react-router-dom': Object.keys(require('react-router-dom')),
    },
  },
  {
    name: 'react-transition-group',
    external: ['react', 'react-dom', 'react-is', 'prop-types'],
    exports: {
      'react-transition-group': Object.keys(require('react-transition-group')),
    },
  },
  {
    name: 'recoil',
    external: ['react', 'react-dom', 'react-is', 'prop-types'],
    exports: {
      recoil: Object.keys(require('recoil')),
    },
  },
  {
    name: 'prop-types',
    external: ['react-is'],
    exports: {
      'prop-types': Object.keys(require('prop-types')),
    },
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
      sourcemap: isProd ? false : true,
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    }),
    resolve({
      preferBuiltins: false,
    }),
    json(),
    typescript({
      tsconfig: `src/vendor/${name}/tsconfig.json`,
    }),
    commonjs({
      include: ['node_modules/**'],
    }),
  ],
}));

export default [...exported];

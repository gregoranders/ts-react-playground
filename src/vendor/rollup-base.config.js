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
    name: 'clsx',
    external: [],
    exports: {},
  },
  {
    name: 'idb',
    external: [],
    exports: {},
  },
  {
    name: 'd3-array',
    output: '',
    external: [],
    exports: {
      'd3-array': Object.keys(require('d3-array')),
    },
  },
  {
    name: 'd3-color',
    output: '',
    external: [],
    exports: {
      'd3-color': Object.keys(require('d3-color')),
    },
  },
  {
    name: 'd3-format',
    output: '',
    external: [],
    exports: {
      'd3-format': Object.keys(require('d3-format')),
    },
  },
  {
    name: 'd3-interpolate',
    output: '',
    external: ['d3-color'],
    exports: {
      'd3-interpolate': Object.keys(require('d3-interpolate')),
    },
  },
  {
    name: 'd3-path',
    output: '',
    external: [],
    exports: {
      'd3-path': Object.keys(require('d3-path')),
    },
  },
  {
    name: 'd3-scale',
    output: '',
    external: ['d3-array', 'd3-interpolate', 'd3-format', 'd3-time', 'd3-time-format'],
    exports: {
      'd3-scale': Object.keys(require('d3-scale')),
    },
  },
  {
    name: 'd3-shape',
    output: '',
    external: ['d3-path'],
    exports: {
      'd3-shape': Object.keys(require('d3-shape')),
    },
  },
  {
    name: 'd3-time',
    output: '',
    external: [],
    exports: {
      'd3-time': Object.keys(require('d3-time')),
    },
  },
  {
    name: 'd3-time-format',
    output: '',
    external: ['d3-time'],
    exports: {
      'd3-time-format': Object.keys(require('d3-time-format')),
    },
  },
  {
    name: 'workbox-window',
    external: [],
    exports: {},
    exports: {
      'workbox-window': Object.keys(require('workbox-window')),
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

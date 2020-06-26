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
    name: '@devexpress/dx-react-core',
    output: '@devexpress/dx-react-core',
    external: ['react', 'react-is', 'react-dom', 'prop-types', '@material-ui/core', '@material-ui/styles'],
    exports: {
      'react-dom': Object.keys(require('react-dom')),
      '@devexpress/dx-react-core': Object.keys(require('@devexpress/dx-react-core')),
    },
  },
  {
    name: '@devexpress/dx-react-chart',
    output: '@devexpress/dx-react-chart',
    external: ['react', 'react-is', 'react-dom', 'prop-types', '@material-ui/core', '@material-ui/styles'],
    exports: {
      'react-dom': Object.keys(require('react-dom')),
      '@devexpress/dx-react-chart': Object.keys(require('@devexpress/dx-react-chart')),
    },
  },
  {
    name: '@devexpress/dx-react-chart-material-ui',
    output: '@devexpress/dx-react-chart-material-ui',
    external: ['react', 'react-is', 'react-dom', 'prop-types', '@material-ui/core', '@material-ui/styles'],
    exports: {
      'react-dom': Object.keys(require('react-dom')),
      '@devexpress/dx-react-chart-material-ui': Object.keys(require('@devexpress/dx-react-chart-material-ui')),
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

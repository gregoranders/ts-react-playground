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
    name: 'react-smooth',
    external: ['react', 'react-dom', 'react-is', 'prop-types', 'react-transition-group'],
    exports: {
      'react-smooth': Object.keys(require('react-smooth')),
    },
  },
  {
    name: 'recharts',
    external: ['react', 'react-dom', 'react-smooth', 'react-virtualized', 'prop-types', 'd3-scale', 'd3-interpolate'],
    exports: {
      recharts: Object.keys(require('recharts')),
    },
  },
  {
    name: 'recharts-scale',
    external: ['react', 'react-dom', 'react-smooth', 'react-virtualized', 'prop-types', 'd3-scale', 'd3-interpolate'],
    exports: {
      recharts: Object.keys(require('recharts')),
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

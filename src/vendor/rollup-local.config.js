/* eslint-disable @typescript-eslint/no-var-requires */
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

const isProduction = process.env.NODE_ENV === 'production';

console.log('Production:', isProduction);

const exported = [
  // {
  //   name: '@gregoranders/csv',
  //   output: '@gregoranders/csv',
  //   external: [],
  //   exports: {},
  // },
  // {
  //   name: '@gregoranders/jhu-covid19',
  //   output: '@gregoranders/jhu-covid19',
  //   external: ['@gregoranders/csv'],
  //   exports: {},
  // },
  {
    name: '@gregoranders/react-spinner',
    output: '@gregoranders/react-spinner',
    external: ['react', 'prop-types'],
    exports: {},
  },
].map(({ name, external, output }) => ({
  input: `src/vendor/${name}/index.tsx`,
  external,
  output: [
    {
      file: output
        ? `public/vendor/${output}.js`
        : `public/vendor/${name}.js`,
      format: 'esm', // 'cjs' | 'umd' | 'iife' | 'es' | 'esm'
      exports: 'named',
      name,
      sourcemap: isProduction ? false : true,
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        isProduction ? 'production' : 'development',
      ),
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

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
    name: '@material-ui/icons',
    output: '@material-ui/icons',
    external: ['react', 'react-is', '@material-ui/styles', 'prop-types'],
    exports: {
      '@material-ui/icons': Object.keys(require('@material-ui/icons')),
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

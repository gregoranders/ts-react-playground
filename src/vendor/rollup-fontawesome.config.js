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
    name: '@fortawesome/fontawesome-svg-core',
    output: '@fortawesome/fontawesome-svg-core',
    external: [],
    exports: {
      '@fortawesome/fontawesome-svg-core': Object.keys(require('@fortawesome/fontawesome-svg-core')),
    },
  },
  {
    name: '@fortawesome/free-solid-svg-icons',
    output: '@fortawesome/free-solid-svg-icons',
    external: [],
    exports: {
      '@fortawesome/free-solid-svg-icons': Object.keys(require('@fortawesome/free-solid-svg-icons')),
    },
  },
  {
    name: '@fortawesome/free-regular-svg-icons',
    output: '@fortawesome/free-regular-svg-icons',
    external: [],
    exports: {
      '@fortawesome/free-regular-svg-icons': Object.keys(require('@fortawesome/free-regular-svg-icons')),
    },
  },
  {
    name: '@fortawesome/free-brands-svg-icons',
    output: '@fortawesome/free-brands-svg-icons',
    external: [],
    exports: {
      '@fortawesome/free-brands-svg-icons': Object.keys(require('@fortawesome/free-brands-svg-icons')),
    },
  },
  {
    name: '@fortawesome/react-fontawesome',
    output: '@fortawesome/react-fontawesome',
    external: ['react', 'react-is', 'react-dom', 'prop-types', '@fortawesome/fontawesome-svg-core'],
    exports: {
      '@fortawesome/react-fontawesome': Object.keys(require('@fortawesome/react-fontawesome')),
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

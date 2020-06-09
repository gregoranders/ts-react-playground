/* eslint-disable @typescript-eslint/no-var-requires */
import { join } from 'path';
import { readdirSync, statSync, writeFileSync } from 'fs';
const minify = require('minify');

const basePath = './public';
const promises = [] as Promise<unknown>[];
const options = {
  js: {
    ecma: 2016,
    keep_classnames: false,
    keep_fnames: false,
    ie8: false,
    module: true,
    nameCache: {},
    safari10: false,
    toplevel: false,
    warnings: false,
    compress: {
      // dead_code: true,
      global_defs: {
        DEBUG: false,
        NODE_ENV: 'production',
      },
    },
    mangle: true,
    output: {
      comments: false,
    },
  },
};
let sizeBefore = 0;
let sizeAfter = 0;

const minifyDir = (parent: string) => {
  const files = readdirSync(parent);

  files.forEach((file) => {
    const full = join(parent, file);
    const stat = statSync(full);

    if (stat.isDirectory()) {
      minifyDir(full);
    } else {
      if (full.endsWith('.js') || full.endsWith('.css')) {
        sizeBefore += stat.size;
        minify(full, options)
          .then((result: string) => {
            writeFileSync(full, result);
            const nstat = statSync(full);
            sizeAfter += nstat.size;
            console.log(
              `Compressed ${join(parent, file)} ${stat.size} ${nstat.size} ${stat.size - nstat.size} [${(
                (nstat.size / stat.size) *
                100.0
              ).toFixed(2)}%]`,
            );
          })
          .catch(console.error);
      }
    }
  });
};

minifyDir(basePath);

Promise.all(promises)
  .then((results) => {
    results.forEach((result) => console.log(result));
  })
  .finally(() => {
    console.log(sizeBefore, sizeAfter, sizeBefore - sizeAfter);
  });

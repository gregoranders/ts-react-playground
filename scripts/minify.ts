/* eslint-disable @typescript-eslint/no-var-requires */
import { Stats, readdirSync, statSync, writeFileSync } from 'fs';

import { join } from 'path';

const minify = require('minify');

const basePath = process.argv[2];

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

const zerofill = (text: string) => {
  const idx = text.indexOf('.');
  if (idx == 1) {
    return `0${text}`;
  }
  return text;
};

const compressFile = async (path: string, stat: Stats) => {
  const data = await minify(path, options);
  writeFileSync(path, data);
  const nstat = statSync(path);
  return { before: stat.size, after: nstat.size };
};

const minifyDir = (parent: string) => {
  const files = readdirSync(parent);

  files.forEach(async (file) => {
    const full = join(parent, file);
    const stat = statSync(full);

    if (stat.isDirectory()) {
      minifyDir(full);
    } else {
      if (file.endsWith('.js') || file.endsWith('.css')) {
        const result = await compressFile(full, stat);
        const ratio = (100.0 - (result.after / result.before) * 100.0).toFixed(2);
        console.log(
          `Compressed [${zerofill(ratio)}%] ${full} ${stat.size} ${result.after} ${stat.size - result.after}`,
        );
      }
    }
  });
};

minifyDir(basePath);

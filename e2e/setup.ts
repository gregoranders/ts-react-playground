import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import 'expect-puppeteer';
import fs from 'fs';
import path from 'path';
import { version } from '../package.json';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestPuppeteerConfig = require('../jest-puppeteer.config.js');

export const timeout = 10000;
export const url = `http://127.0.0.1:${jestPuppeteerConfig.server.port}`;

export const customSnapshotsDir = path.join('e2e', 'screenshots', version);
export const customDiffDir = path.join(customSnapshotsDir, 'diff');

const customConfig = { threshold: 0.5 };
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: customConfig,
  customSnapshotsDir,
  customDiffDir,
});

expect.extend({ toMatchImageSnapshot });

export const mkdir = (path: string): void => {
  if (!fs.existsSync(path)) fs.mkdirSync(path);
};

import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { version } from '../package.json';
import 'expect-puppeteer';
// import 'jest-puppeteer';

declare const puppeteerConfig: {
  server: {
    port: number;
  };
};

export const timeout = 10000;
export const url = `https://localhost:${puppeteerConfig.server.port}`;

export const customSnapshotsDir = join('e2e', 'screenshots', version);
export const customDiffDir = join(customSnapshotsDir, 'diff');

const customConfig = { threshold: 0 };
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  // blur: 1,
  customDiffConfig: customConfig,
  customSnapshotsDir,
  customDiffDir,
  failureThreshold: 0.008,
  failureThresholdType: 'percent',
});

expect.extend({ toMatchImageSnapshot });

export const mkdir = (path: string): void => {
  if (!existsSync(path)) mkdirSync(path);
};

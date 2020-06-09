import { Browser, devices } from 'puppeteer';
import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import 'expect-puppeteer';
import fs from 'fs';

declare const browser: Browser;

const customConfig = { threshold: 0.5 };
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: customConfig,
});

expect.extend({ toMatchImageSnapshot });

const timeout = 10000;
const url = 'http://127.0.0.1:7683/ts-react-playground/';

const mkdir = (path: string) => {
  if (!fs.existsSync(path)) fs.mkdirSync(path);
};

describe('Index', () => {
  beforeAll(async () => {
    mkdir('./it/screenshots');
  });

  Object.keys(devices).forEach((key) => {
    const device = devices[key];

    xtest(
      `${device.name}`,
      async () => {
        const page = await browser.newPage();

        page.emulate({
          viewport: {
            width: device.viewport.width,
            height: device.viewport.height,
            isLandscape: device.viewport.isLandscape,
          },
          userAgent: device.userAgent,
        });

        await page.goto(url);
        await page.waitForSelector('.w3-margin');

        mkdir('./it/screenshots/index/');
        const image = await page.screenshot({ path: `./it/screenshots/index/${device.name}.png`, type: 'png' });
        expect(image).toMatchImageSnapshot();

        page.close();
      },
      timeout,
    );
  });
});

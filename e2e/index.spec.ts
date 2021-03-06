import { Browser, devices } from 'puppeteer';
import { customDiffDir, customSnapshotsDir, mkdir, timeout, url } from './setup';

declare const browser: Browser;

describe.skip('Index', () => {
  beforeAll(async () => {
    mkdir(customSnapshotsDir);
    mkdir(customDiffDir);
  });

  Object.keys(devices).forEach((key) => {
    const device = devices[key];

    test.skip(
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

        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();

        page.close();
      },
      timeout,
    );
  });
});

import { Browser, Page } from 'puppeteer';
import { timeout, url } from './setup';

declare const browser: Browser;

const width = 1920;
const height = 3000;

let page: Page;

beforeAll(async () => {
  page = await browser.newPage();

  page.emulate({
    viewport: {
      width: width,
      height: height,
    },
    userAgent: '',
  });
});

describe('index', () => {
  beforeEach(async () => {
    await page.goto(url, { waitUntil: 'networkidle2' });
  });

  test(
    'title',
    async () => {
      const title = await page.title();
      expect(title).toBe('ts-react-playground - TypeScript React Playground');
    },
    timeout,
  );

  test(
    'index',
    async () => {
      const h2 = await page.$('h2');
      expect(h2).toBeTruthy();
      const html = await page.evaluate((h2) => h2.innerHTML, h2);
      expect(html).toBe('IndexPage');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    },
    timeout,
  );

  test(
    'home',
    async () => {
      await page.click('#app > nav > a:nth-child(1)');
      await page.waitFor(500);
      const button = await page.$('button');
      expect(button).toBeTruthy();
      const html = await page.evaluate((h2) => h2.innerHTML, button);
      expect(html).toBe('Generate Users');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    },
    timeout,
  );

  test(
    'generate users',
    async () => {
      await page.click('#app > nav > a:nth-child(1)');
      await page.waitFor(500);
      const button = await page.$('button');
      expect(button).toBeTruthy();
      const before = await page.screenshot();
      expect(before).toMatchImageSnapshot();
      await page.click('button');
      await page.waitFor(1000);
      let list = await page.$$('dl');
      expect(list).toHaveLength(15);
      const html = await page.evaluate((h2) => h2.innerHTML, button);
      expect(html).toBe('Generate Users');
      const after = await page.screenshot();
      expect(after).toMatchImageSnapshot();
      list = await page.$$('dl');
      expect(list).toHaveLength(15);
    },
    timeout,
  );

  test(
    'materialui',
    async () => {
      await page.click('#app > nav > a:nth-child(2)');
      await page.waitFor(500);
      const h2 = await page.$('h2');
      expect(h2).toBeTruthy();
      const html = await page.evaluate((h2) => h2.innerHTML, h2);
      expect(html).toBe('MaterialUIPage');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    },
    timeout,
  );

  test(
    'about',
    async () => {
      await page.click('#app > nav > a:nth-child(3)');
      await page.waitFor(500);
      const h2 = await page.$('h2');
      expect(h2).toBeTruthy();
      const html = await page.evaluate((h2) => h2.innerHTML, h2);
      expect(html).toBe('AboutPage');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    },
    timeout,
  );

  afterAll(async () => {
    page.close();
  });
});

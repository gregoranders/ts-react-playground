import { Browser, Page } from 'puppeteer';
import { timeout, url } from './setup';

declare const browser: Browser;

const width = 1920;
const height = 1080;

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
      expect(html).toBe('Generate Users [0]');
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
      await page.click('button');
      await page.waitFor(1000);
      const html = await page.evaluate((h2) => h2.innerHTML, button);
      expect(html).toBe('Generate Users [100]');
    },
    timeout,
  );

  test(
    'about',
    async () => {
      await page.click('#app > nav > a:nth-child(2)');
      await page.waitFor(500);
      const h2 = await page.$('h2');
      expect(h2).toBeTruthy();
      const html = await page.evaluate((h2) => h2.innerHTML, h2);
      expect(html).toBe('AboutPage');
    },
    timeout,
  );

  afterAll(async () => {
    page.close();
  });
});

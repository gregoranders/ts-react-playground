module.exports = {
  browser: 'chromium',
  browserContext: 'default',
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: `npm run dev`,
    port: 7683,
    launchTimeout: 10000,
    debug: false,
  },
};

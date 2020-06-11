/* eslint-disable @typescript-eslint/no-var-requires */
const cmd = `cross-env-shell NODE_PORT=${process.env.NODE_PORT}`;
const command = `${cmd} && npm run ${process.env.NODE_E2E === 'esm' ? 'serve' : 'e2e:serve'}`;

module.exports = {
  browser: 'chromium',
  browserContext: 'default',
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
    // args: ['--enable-experimental-web-platform-features']
  },
  server: {
    command,
    port: process.env.NODE_PORT,
    launchTimeout: 10000,
    debug: true,
  },
};

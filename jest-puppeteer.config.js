/* eslint-disable @typescript-eslint/no-var-requires */
const portfinder = require('portfinder-sync');
const packageJson = require('./package.json');

const port = portfinder.getPort(packageJson.baseport);
const command = `cross-env NODE_PORT=${port} NODE_ENV=production npm run ${process.env.NODE_E2E === 'esm' ? 'serve' : 'e2e:serve'}`;

const args = ['--enable-experimental-web-platform-features'];

// Did not manage to get self signed certs working on macos
// if (process.platform === 'darwin') {
//   args.push('--allow-insecure-localhost');
// }

module.exports = {
  browser: 'chromium',
  browserContext: 'default',
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
    args
  },
  server: {
    command,
    port,
    ssl: true,
    host: process.env.NODE_HOST || 'localhost',
    launchTimeout: 10000,
    debug: true,
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackConfig = require('./e2e/webpack.config.js');
module.exports = {
  browser: 'chromium',
  browserContext: 'default',
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: `npm run e2e:serve`,
    port: webpackConfig.devServer.port,
    launchTimeout: 10000,
    debug: false,
  },
};

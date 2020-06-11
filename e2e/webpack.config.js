/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const config = require('../webpack.config.js');

config.devServer.hot = false;
config.devServer.inline = false;
config.devServer.stats = 'none';
config.stats = 'none';

module.exports = config;

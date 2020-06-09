/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const copydir = require('copy-dir');

fs.mkdirSync('./public-it');
fs.mkdirSync('./public-it/ts-react-playground');

copydir.sync('public', 'public-it/ts-react-playground');

import * as favicons from 'favicons';
import * as fs from 'fs';
import * as packageJson from '../package.json';
// eslint-disable-next-line unicorn/import-style
import * as path from 'path';

const icon = 'react.svg';

const configuration: favicons.FaviconOptions = {
  path: `${packageJson.basename}assets`,
  appName: packageJson.name,
  appShortName: packageJson.name,
  appDescription: packageJson.description,
  developerName: packageJson.author,
  developerURL: packageJson.homepage,
  dir: 'auto',
  lang: 'en-US',
  background: '#000',
  theme_color: '#000',
  appleStatusBarStyle: 'black-translucent',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  start_url: `${packageJson.basename}index.html`,
  version: '1.0',
  logging: false,
  pixel_art: false,
  loadManifestWithCredentials: false,
  manifestRelativePaths: false,
  pipeHTML: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: true,
    favicons: true,
    firefox: true,
    windows: true,
    yandex: true,
  },
};

favicons(icon, configuration)
  .then((response) => {
    const assetPath = path.resolve('public', 'assets');

    const writeFiles = (
      files: { name: string; contents: Buffer | string }[],
    ) => {
      files.forEach((file) => {
        fs.writeFileSync(path.resolve(assetPath, file.name), file.contents);
      });
    };

    if (!fs.existsSync(assetPath)) fs.mkdirSync(assetPath);

    writeFiles(response.images);
    writeFiles(response.files);

    fs.writeFileSync(
      path.resolve('public', 'favicon.html'),
      response.html.join('\n'),
    );
  })
  .catch((error) => {
    console.log(error);
  });

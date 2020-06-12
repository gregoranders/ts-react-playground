// eslint-disable-next-line @typescript-eslint/no-var-requires

var packageJson = require('./package.json'),
  fs = require('fs'),
  path = require('path'),
  favicons = require('favicons'),
  source = 'react.svg', // Source image(s). `string`, `buffer` or array of `string`
  configuration = {
    path: '/ts-react-playground/assets', // Path for overriding default icons path. `string`
    appName: packageJson.name,
    appShortName: packageJson.name,
    appDescription: packageJson.description,
    developerName: packageJson.author,
    developerURL: packageJson.homepage,
    dir: 'auto', // Primary text direction for name, short_name, and description
    lang: 'en-US', // Primary language for name and short_name
    background: '#000', // Background colour for flattened icons. `string`
    theme_color: '#000', // Theme color user for example in Android's task switcher. `string`
    appleStatusBarStyle: 'black-translucent', // Style for Apple status bar: "black-translucent", "default", "black". `string`
    display: 'standalone', // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
    orientation: 'any', // Default orientation: "any", "natural", "portrait" or "landscape". `string`
    scope: '/', // set of URLs that the browser considers within your app
    start_url: '/ts-react-playground/index.html', // Start URL when launching the application from a device. `string`
    version: '1.0', // Your application's version string. `string`
    logging: false, // Print logs to console? `boolean`
    pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
    loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
    icons: {
      // Platform Options:
      // - offset - offset in percentage
      // - background:
      //   * false - use default
      //   * true - force use default, e.g. set background for Android icons
      //   * color - set background for the specified icons
      //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
      //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
      //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
      //
      android: true, // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      coast: true, // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      favicons: true, // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      firefox: true, // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
      yandex: true, // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    },
  },
  callback = function (error, response) {
    if (error) {
      console.log(error.message); // Error description e.g. "An unknown error has occurred"
      return;
    }
    const assetPath = path.resolve('public', 'assets');
    if (!fs.existsSync(assetPath)) fs.mkdirSync(assetPath);
    response.images.forEach((image) => {
      fs.writeFileSync(path.resolve(assetPath, image.name), image.contents);
    }); // Array of { name: string, contents: <buffer> }
    response.files.forEach((file) => {
      fs.writeFileSync(path.resolve(assetPath, file.name), file.contents);
    }); // Array of { name: string, contents: <buffer> }

    fs.writeFileSync(path.resolve('public', 'favicon.html'), response.html.join('\n'));
  };

favicons(source, configuration, callback);

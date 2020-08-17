const path = require('path');

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias = {
      '@models': path.resolve(__dirname, '..', 'src/script/models'),
      '@states': path.resolve(__dirname, '..', 'src/script/states'),
      '@atoms': path.resolve(__dirname, '..', 'src/script/components/atoms'),
      '@organisms': path.resolve(
        __dirname,
        '..',
        'src/script/components/organisms',
      ),
      '@molecules': path.resolve(
        __dirname,
        '..',
        'src/script/components/molecules',
      ),
      '@pages': path.resolve(__dirname, '..', 'src/script/components/pages'),
      '@components': path.resolve(__dirname, '..', 'src/script/components'),
      '@app': path.resolve(__dirname, '..', 'src/script'),
      './fonts': 'node_modules/@fortawesome/fontawesome-free/webfonts',
    };

    config.performance = {
      hints: false,
      maxEntrypointSize: 200000000,
      maxAssetSize: 200000000,
    };

    config.resolve.extensions.push('.ts', '.tsx', '.scss');

    return config;
  },

  stories: ['../src/script/**/*.stories.@(tsx|mdx)'],

  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-jest',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs' /* '@storybook/addon-controls', */,
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
};

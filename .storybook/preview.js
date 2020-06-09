import React from 'react';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router';

import centered from '@storybook/addon-centered/react';

import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
// import { withInfo } from '@storybook/addon-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';

const theme = create({
  base: 'dark',
  brandTitle: 'ts-react-playground - TypeScript React Playground',
  url: 'https://gregoranders.github.io/ts-react-playground',
});

import results from '../.jest-test-results.json';

import '../src/style/styles.scss';

addParameters({
  options: {
    theme,
    showPanel: true,
  },
  // info: {
  //   inline: true,
  //   header: true,
  // },
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
});

// addDecorator(withInfo);
addDecorator((...args) => {
  const params = (new URL(document.location)).searchParams;
  const isInDockView = params.get('viewMode') === 'docs';

  if (isInDockView) {
    return args[0]();
  }

  return centered(...args);
});
addDecorator(withA11y);
addDecorator(story => <RecoilRoot><MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter></RecoilRoot>);
addDecorator(withTests({results}));
addDecorator(withKnobs);

const loadStories = () => {
  return [
    require.context('../docs', true, /Intro.stories.mdx/),
    require.context('../src', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/)
  ];
}

configure(loadStories(), module);

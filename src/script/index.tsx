import React from 'react';
import { render } from 'react-dom';
import { Workbox } from 'workbox-window';

const basename = (() => {
  const element = document.head.querySelector('base');
  if (element) {
    const attribute = element.getAttribute('href');
    if (attribute) {
      return attribute;
    }
  }
  return '/';
})();

import Application from '@app/application';

const registerServiceWorker = async (base: string) => {
  const serviceWorker = new Workbox(`${base}serviceWorker.js?basename=${base}`);
  const registration = await serviceWorker.register();
  if (registration) {
    console.log(registration);
  }
  return registration;
};

export const bootstrap = async (serviceWorker = true): Promise<void> => {
  const element = document.querySelector('#app');
  if (!element) {
    throw new Error('Missing element `#app`');
  }

  render(<Application basename={basename} />, element);

  if (serviceWorker) {
    await registerServiceWorker(basename);
  }
};

export default bootstrap;

bootstrap(false);

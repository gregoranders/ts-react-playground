import React from 'react';
import { render } from 'react-dom';
import { Workbox } from 'workbox-window';

const basename = (() => {
  const el = document.head.querySelector('base');
  if (el) {
    const attr = el.getAttribute('href');
    if (attr) {
      return attr;
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
  const el = document.querySelector('#app');
  if (!el) {
    throw Error('Missing element `#app`');
  }

  render(<Application basename={basename} />, el);

  if (serviceWorker) {
    await registerServiceWorker(basename);
  }
};

export default bootstrap;

bootstrap(false);

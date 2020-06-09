import React from 'react';
import { render } from 'react-dom';

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

export const bootstrap = async (): Promise<void> => {
  const el = document.querySelector('#app');
  if (!el) {
    throw Error('Missing element `#app`');
  }

  render(<Application basename={basename} />, el);
};

export default bootstrap;

bootstrap();

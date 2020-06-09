/* eslint-disable @typescript-eslint/camelcase */
declare module 'react-dom' {
  const flushSync: Function;
  const unstable_createPortal: Function;
}

import ReactDOM, {
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version,
} from 'react-dom';

export {
  ReactDOM,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version,
};

export default ReactDOM;

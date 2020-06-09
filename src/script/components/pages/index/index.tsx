import React, { FunctionComponent, memo } from 'react';

export const IndexPage: FunctionComponent = () => {
  return <h2>{IndexPage.displayName}</h2>;
};

IndexPage.displayName = 'IndexPage';

export default memo(IndexPage);

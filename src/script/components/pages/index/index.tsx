import React, { memo } from 'react';

export const IndexPage = () => {
  return <h2>{IndexPage.displayName}</h2>;
};

IndexPage.displayName = 'IndexPage';

export default memo(IndexPage);

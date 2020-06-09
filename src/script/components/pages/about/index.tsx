import React, { FunctionComponent, memo } from 'react';

export const AboutPage: FunctionComponent = () => {
  return <h2>{AboutPage.displayName}</h2>;
};

AboutPage.displayName = 'AboutPage';

export default memo(AboutPage);

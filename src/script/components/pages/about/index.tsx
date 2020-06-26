import React, { memo } from 'react';

export const AboutPage = () => {
  return <h2>{AboutPage.displayName}</h2>;
};

AboutPage.displayName = 'AboutPage';

export default memo(AboutPage);

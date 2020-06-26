import React, { memo } from 'react';

import UsersModelView from '@organisms/users';

export const HomePage = () => {
  return <UsersModelView />;
};

HomePage.displayName = 'HomePage';

export default memo(HomePage);

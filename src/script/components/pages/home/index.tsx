import React, { FunctionComponent, memo } from 'react';

import UsersModelView from '@organisms/users';

export const HomePage: FunctionComponent = () => {
  return <UsersModelView />;
};

HomePage.displayName = 'HomePage';

export default memo(HomePage);

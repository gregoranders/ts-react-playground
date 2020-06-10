import React, { FunctionComponent, memo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { generate, UsersAtom, UsersLength } from '@models/user';

import Button from '@atoms/button';
import UsersView from '@molecules/users';

export const UsersModelView: FunctionComponent = () => {
  const [users, setUsers] = useRecoilState(UsersAtom);
  const usersLength = useRecoilValue(UsersLength);

  const generateUsers = async () => {
    setUsers(await generate());
  };

  return (
    <>
      <Button onClick={generateUsers}>Generate Users [{usersLength}]</Button>
      <UsersView users={users} />
    </>
  );
};

UsersModelView.displayName = 'UsersModelView';

export default memo(UsersModelView);

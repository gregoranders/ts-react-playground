import React, { FunctionComponent, memo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { generate, UsersAtom, UsersLength, UsersTop10, UsersBottom10 } from '@models/user';

import Button from '@atoms/button';
import UsersView from '@molecules/users';

export const UsersModelView: FunctionComponent = () => {
  const [users, setUsers] = useRecoilState(UsersAtom);
  const usersLength = useRecoilValue(UsersLength);
  const usersTop10 = useRecoilValue(UsersTop10);
  const usersBottom10 = useRecoilValue(UsersBottom10);

  const generateUsers = () => {
    setUsers(generate(15));
  };

  return (
    <>
      <Button onClick={generateUsers}>Generate Users [{usersLength}]</Button>
      <table>
        <tr>
          <td>
            <UsersView users={usersTop10} />
          </td>
          <td>
            <UsersView users={users} />
          </td>
          <td>
            <UsersView users={usersBottom10} />
          </td>
        </tr>
      </table>
    </>
  );
};

UsersModelView.displayName = 'UsersModelView';

export default memo(UsersModelView);

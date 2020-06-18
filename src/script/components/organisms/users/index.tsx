import React, { FunctionComponent, memo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { UsersAtom, UsersBottom10, UsersLength, UsersTop10, generate } from '@models/user';

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
        <tbody>
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
        </tbody>
      </table>
    </>
  );
};

UsersModelView.displayName = 'UsersModelView';

export default memo(UsersModelView);

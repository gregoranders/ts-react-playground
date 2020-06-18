import React, { FunctionComponent, memo } from 'react';
import { useRecoilState } from 'recoil';

import { UsersAtom, generate } from '@models/user';

import Button from '@atoms/button';
import UsersView from '@molecules/users';

export const UsersModelView: FunctionComponent = () => {
  const [users, setUsers] = useRecoilState(UsersAtom);

  const generateUsers = () => {
    setUsers(generate(15));
  };

  return (
    <>
      <Button onClick={generateUsers}>Generate Users [{users.length}]</Button>
      <table>
        <tbody>
          <tr>
            <td>
              <UsersView users={users} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

UsersModelView.displayName = 'UsersModelView';

export default memo(UsersModelView);

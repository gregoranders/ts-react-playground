import React, { FunctionComponent, memo } from 'react';
import { arrayOf as IsArrayOf } from 'prop-types';

import { DefaultUser, User, UserPropTypes } from '@models/user';
import UserView from '@atoms/user';

type Props = {
  /**
   * Users
   *
   * @type User[]
   */
  users: User[];
};

export const UsersView: FunctionComponent<Props> = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <UserView key={index} user={user} />
      ))}
    </>
  );
};

UsersView.displayName = 'UsersView';

UsersView.defaultProps = {
  users: [DefaultUser],
};

UsersView.propTypes = {
  users: IsArrayOf(UserPropTypes.isRequired).isRequired,
};

export default memo(UsersView);

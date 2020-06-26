import React, { memo } from 'react';
import { arrayOf as IsArrayOf } from 'prop-types';

import { DefaultUser, UserPropTypes } from '@models/user';
import UserView from '@atoms/user';

type Props = Readonly<typeof defaultProps>;

const defaultProps = {
  /**
   * Users
   *
   * @type User[]
   */
  users: [DefaultUser],
};

export const UsersView = ({ users }: Props) => {
  return (
    <>
      {users.map((user, index) => (
        <UserView key={index} user={user} />
      ))}
    </>
  );
};

UsersView.displayName = 'UsersView';

UsersView.defaultProps = defaultProps;

UsersView.propTypes = {
  users: IsArrayOf(UserPropTypes.isRequired).isRequired,
};

export default memo(UsersView);

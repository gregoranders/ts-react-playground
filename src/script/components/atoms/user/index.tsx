import React, { memo } from 'react';

import { DefaultUser, UserPropTypes } from '@models/user';

type Props = Readonly<typeof defaultProps>;

const defaultProps = {
  /**
   * User
   *
   * @type User
   */
  user: DefaultUser,
};

/**
 * UserView
 *
 * @description User view
 *
 * @param {User} user
 */
export const UserView = ({ user }: Props) => {
  return (
    <dl>
      <dt>First Name</dt>
      <dd>{user.firstName}</dd>
      <dt>Last Name</dt>
      <dd>{user.lastName}</dd>
      <dt>eMail</dt>
      <dd>{user.eMail}</dd>
    </dl>
  );
};

UserView.displayName = 'UserView';

UserView.defaultProps = defaultProps;

UserView.propTypes = {
  user: UserPropTypes.isRequired,
};

export default memo(UserView);

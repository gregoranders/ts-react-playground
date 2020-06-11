import React, { FunctionComponent, memo } from 'react';

import { DefaultUser, User, UserPropTypes } from '@models/user';

type Props = {
  /**
   * User
   *
   * @type User
   */
  user: User;
};

/**
 * UserView
 *
 * @description User view
 *
 * @param {User} user
 */
export const UserView: FunctionComponent<Props> = ({ user }: Props) => {
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

UserView.defaultProps = {
  user: DefaultUser,
};

UserView.propTypes = {
  user: UserPropTypes.isRequired,
};

export default memo(UserView);

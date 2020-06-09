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

export const UserView: FunctionComponent<Props> = ({ user }) => {
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

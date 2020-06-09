import React, { FunctionComponent, memo } from 'react';
import clsx from 'clsx';
import { NavLink as ReactNavLink, NavLinkProps } from 'react-router-dom';
import { string as IsString, element as IsElement, oneOfType as IsOneOfType } from 'prop-types';

type Props = NavLinkProps & {
  /**
   * Children
   *
   * @type React.ReactNode
   */
  children: string | React.ReactElement;
};

export const NavLink: FunctionComponent<Props> = (props) => {
  const classes = {
    'w3-bar-item': true,
    'w3-button': true,
    'w3-mobile': true,
    'w3-hover-theme': true,
  } as Record<string, true>;

  if (props.className && props.className.length) {
    classes[props.className] = true;
  }

  return (
    <ReactNavLink className={clsx(classes)} activeClassName="w3-theme-d5" to={props.to}>
      {props.children}
    </ReactNavLink>
  );
};

NavLink.displayName = 'NavLink';

NavLink.defaultProps = {
  children: <>NavLink</>,
};

NavLink.propTypes = {
  children: IsOneOfType([IsString, IsElement]).isRequired,
  className: IsString,
  to: IsString.isRequired,
};

export default memo(NavLink);

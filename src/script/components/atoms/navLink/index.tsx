import clsx from 'clsx';
import React, { memo } from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';
import { element as IsElement, oneOfType as IsOneOfType, string as IsString } from 'prop-types';

type Props = Readonly<typeof defaultProps & { children: string; to: string }>;

const defaultProps = {
  /**
   * CSS class
   *
   * @type string
   */
  className: '',
};

export const NavLink = ({ className, to, children }: Props) => {
  const classes = {
    'w3-bar-item': true,
    'w3-button': true,
    'w3-mobile': true,
    'w3-hover-theme': true,
  } as Record<string, boolean>;

  if (className && className.length) {
    classes[className] = true;
  }

  return (
    <ReactNavLink className={clsx(classes)} activeClassName="w3-theme-d5" to={to}>
      {children}
    </ReactNavLink>
  );
};

NavLink.displayName = 'NavLink';

NavLink.defaultProps = defaultProps;

NavLink.propTypes = {
  children: IsOneOfType([IsString, IsElement]).isRequired,
  className: IsString,
  to: IsString.isRequired,
};

export default memo(NavLink);

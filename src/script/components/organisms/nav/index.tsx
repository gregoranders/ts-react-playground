import React, { FunctionComponent, memo } from 'react';

import NavLink from '@atoms/navLink';

export const Nav: FunctionComponent = () => {
  return (
    <nav className="w3-bar w3-theme-d3">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/materialui">Material UI</NavLink>
      <NavLink to="/about" className="w3-right">
        About
      </NavLink>
    </nav>
  );
};

Nav.displayName = 'Nav';

export default memo(Nav);

import React, { FunctionComponent, memo } from 'react';
import { Link } from 'react-router-dom';

export const Header: FunctionComponent = () => {
  return (
    <header className="w3-center">
      <h1 className="w3-jumbo w3-wide">
        <Link to="/">{Header.displayName}</Link>
      </h1>
    </header>
  );
};

Header.displayName = 'Header';

export default memo(Header);

import React, { FunctionComponent, memo } from 'react';
import { element as IsElement, oneOfType as IsOneOfType, string as IsString } from 'prop-types';

type Props = {
  /**
   * Children
   *
   * @type React.ReactNode
   */
  children: React.ReactNode;
};

export const Main: FunctionComponent<Props> = ({ children }) => {
  return <main className="w3-margin">{children}</main>;
};

Main.displayName = 'Main';

Main.propTypes = {
  children: IsOneOfType([IsElement, IsString]).isRequired,
};

export default memo(Main);

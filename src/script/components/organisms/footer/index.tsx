import React, { FunctionComponent, memo } from 'react';
import { number as IsNumber } from 'prop-types';

type Props = {
  year?: number;
};

export const Footer: FunctionComponent<Props> = ({ year }) => {
  return <footer className="w3-padding-32 w3-center">&copy; {year} by Gregor Anders</footer>;
};

Footer.displayName = 'Footer';

Footer.defaultProps = {
  year: new Date().getUTCFullYear(),
};

Footer.propTypes = {
  year: IsNumber.isRequired,
};

export default memo(Footer);

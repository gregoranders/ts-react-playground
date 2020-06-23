import React, { memo } from 'react';
import { number as IsNumber } from 'prop-types';

type Props = Readonly<typeof defaultProps>;

const defaultProps = {
  year: new Date().getUTCFullYear(),
};

export const Footer = ({ year }: Props) => {
  return <footer className="w3-padding-32 w3-center">&copy; {year} by Gregor Anders</footer>;
};

Footer.displayName = 'Footer';

Footer.defaultProps = defaultProps;

Footer.propTypes = {
  year: IsNumber.isRequired,
};

export default memo(Footer);

import React, { memo } from 'react';
import {
  array as IsArray,
  bool as IsBoolean,
  func as IsFunction,
  number as IsNumber,
  oneOfType as IsOneOfType,
  string as IsString,
} from 'prop-types';

type Props = Readonly<typeof defaultProps>;

const defaultProps = {
  /**
   * disabled property of HTML button
   *
   * @default: false
   */
  disabled: false,
  /**
   * onClick handler
   *
   * @type (event: React.MouseEvent<HTMLButtonElement>) => void
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => console.log(event),
  /**
   * HTML button content
   *
   * @type string
   * @default Button
   */
  children: 'Button',
};

/**
 * HTML Button
 */
export const Button = ({ children, disabled, onClick }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={(event) => {
        onClick(event);
      }}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

Button.defaultProps = defaultProps;

Button.propTypes = {
  disabled: IsBoolean.isRequired,
  onClick: IsFunction.isRequired,
  children: IsOneOfType([IsArray, IsString, IsNumber]).isRequired,
};

export default memo(Button);

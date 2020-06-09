import React, { FunctionComponent, memo } from 'react';
import {
  bool as IsBoolean,
  element as IsElement,
  func as IsFunction,
  oneOfType as IsOneOfType,
  string as IsString,
} from 'prop-types';

type OnClick = (e?: React.MouseEvent<HTMLButtonElement>) => void;

type Props = {
  /**
   * disabled property of HTML button
   *
   * @default: false
   */
  disabled?: boolean;
  /**
   * onClick handler
   *
   * @type (e?: React.MouseEvent<HTMLButtonElement>) => void
   */
  onClick: OnClick;
  /**
   * HTML button content
   *
   * @type string | React.ReactNode
   * @default Button
   */
  children?: string | React.ReactNode;
};

/**
 * HTML Button
 */
export const Button: FunctionComponent<Props> = ({ children, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  children: 'Button',
};

Button.propTypes = {
  disabled: IsBoolean,
  onClick: IsFunction.isRequired,
  children: IsOneOfType([IsString, IsElement]),
};

export default memo(Button);

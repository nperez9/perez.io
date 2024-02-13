import React from 'react';
import PropTypes from 'prop-types';

const buttonTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'];

export interface ButtonProps {
  children: React.ReactNode;
  classes?: string;
  type?: (typeof buttonTypes)[number];
  outline?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, classes, type, outline }) => {
  const isOutlined = outline ? '-outline' : '';
  const buttonClasses = `btn${isOutlined}-${type}`;

  return (
    <button className={`btn ${buttonClasses} ${classes}`} type="button">
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
  classes: '',
  outline: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  type: PropTypes.oneOf(buttonTypes),
  outline: PropTypes.bool,
};

export default Button;

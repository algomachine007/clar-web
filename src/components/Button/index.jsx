import "./index.less";
import * as React from "react";

import { Button as BSButton } from "react-bootstrap";
import classNames from "classnames";

const Button = ({
  label = null,
  Icon = null,
  type = null,
  className = "",
  onClick = (e) => {},
  disabled = false,
  children = null,

  ...rest
}) => {
  const buttonClass = classNames({
    "button-disabled": disabled,
  });
  return (
    <BSButton
      className={`app-button ${buttonClass} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children || label}

      {Icon}
    </BSButton>
  );
};

export default Button;

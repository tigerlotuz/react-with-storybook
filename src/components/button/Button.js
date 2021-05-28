import React from "react";
import './Button.css';

function Button(props) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button 
    // onClick= {() => console.log("Button clicked")}
    className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;

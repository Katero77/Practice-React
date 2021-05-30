import React from 'react';
import PropTypes from "prop-types";
import "./Button.css";

const  Button = ({caption, handler}) => {
  return (
    <button className="button" onClick={handler}>{caption}</button>
  );
}

Button.defaultProps = {
  caption: "Click me",
  handler: () => {}
};

Button.propTypes = {
  caption: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default Button;

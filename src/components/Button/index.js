import React from "react";

// Proptypes
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, color, onClick }) => {
  return (
    <Wrapper onClick={onClick} type='button' style={{ backgroundColor: color }}>
      {text}
    </Wrapper>
  );
};

Button.defaultProps = {
  text: "Add",
  color: "blue",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

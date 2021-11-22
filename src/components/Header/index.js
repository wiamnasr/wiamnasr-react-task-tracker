import React from "react";

// Proptypes
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content } from "./Header.styles";

// Components
import Button from "../Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <Wrapper>
      <Content>
        <h1>{title}</h1>
      </Content>
      <Button
        color={showAdd ? "red" : "blue"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </Wrapper>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

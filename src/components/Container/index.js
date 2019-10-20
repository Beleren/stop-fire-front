import React from "react";
import Container from "@material-ui/core/Container";

const CustomContainer = props => {
  const { styles, children, maxWidth } = props;
  const customStyles = {
    ...styles,
    height: window.innerHeight
  };
  return <Container maxWidth={maxWidth} style={customStyles}>{ children }</Container>;
};

export default CustomContainer;

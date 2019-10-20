import React from "react";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

const customStyles = {
  height: window.innerHeight
};
const CustomContainer = props => {
  const { children, maxWidth } = props;
  return (
    <Container maxWidth={maxWidth}>
      {children}
    </Container>
  );
};

export default withStyles(customStyles)(CustomContainer);

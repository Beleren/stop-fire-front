import React from "react";

const styles = {
  height: window.innerHeight,
  width: "100%",
  position: "absolute",
  zIndex: "5",
  backgroundColor: "white",
  opacity: "0.8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const MenuContainer = props => <div style={styles}>{props.children}</div>;

export default MenuContainer;

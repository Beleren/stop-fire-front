import React from "react";
import Button from "@material-ui/core/Button";

const styles = {
  height: window.innerHeight,
  width: "100%",
  position: "absolute",
  zIndex: "5",
  backgroundColor: "white",
  opacity: "0.8"
}

const Home = () => {
  return (
    <section style={styles}>
      <h1>Nome do jogo</h1>
      <Button variant="contained">oi</Button>
    </section>
  );
};

export default Home;

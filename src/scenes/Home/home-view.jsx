import React from "react";
import Button from "@material-ui/core/Button";
import MenuContainer from "../../components/MenuContainer";

const Home = () => {
  return (
    <MenuContainer>
      <section style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "2em" }}>Stop Fire</h1>
        <div>
          <Button variant="contained" href="/game">START</Button>
        </div>
      </section>
    </MenuContainer>
  );
};

export default Home;

import React from "react";
import Header from "../component/Header";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";

import ItemListContainer from "../component/ItemListContainer/ItemListContainer";

function Home() {
  return (
    <>
      <Header className="headerContainer" />
      <Container fluid className="mainContainer">
        <ItemListContainer />
      </Container>
      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <Container className="p-3">
      <Row className="justify-content-md-center">
        <h5>Mini Jeopardy</h5>
      </Row>
      <GameBoard />
    </Container>
  );
}

export default App;

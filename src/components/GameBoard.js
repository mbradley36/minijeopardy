import React, { Component } from "react";
import axios from "axios";
import { parseByYear } from "../utils/QuestionsHandler";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

class GameBoard extends Component {
  state = { questions: { clues: [] } };

  async componentDidMount() {
    f;
    //call api for questions in the science category
    const questions = await axios.get(
      "http://www.jservice.io/api/category?id=25"
    );
    const parsedQuestions = parseByYear(questions.data, 1996);
    this.setState({ questions: parsedQuestions });
  }

  renderQuestions() {
    if (!this.state.questions.clues || this.state.questions.clues.length === 0)
      return "No questions available";

    return this.state.questions.clues.map(q => (
      <Card key={q.id}>
        <Card.Body>
          <Card.Title>For {q.value} points:</Card.Title>
          <Card.Text>{q.question}</Card.Text>
        </Card.Body>
      </Card>
    ));
  }

  render() {
    return <Row>{this.renderQuestions()}</Row>;
  }
}

export default GameBoard;

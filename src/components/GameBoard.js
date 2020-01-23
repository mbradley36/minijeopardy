import React, { Component } from "react";
import axios from "axios";
import { parseByYear, sortByPoints } from "../utils/QuestionsHandler";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

class GameBoard extends Component {
  state = {
    questions: {
      clues: [],
      clues100: [],
      clues200: [],
      clues300: [],
      clues400: [],
      clues500: []
    },
    questionsDisplayed: 5
  };

  async componentDidMount() {
    //call api for questions in the science category
    const questions = await axios.get(
      "http://www.jservice.io/api/category?id=25"
    );
    const parsedQuestions = parseByYear(questions.data, 1996);
    const sortedQuestions = sortByPoints(parsedQuestions);
    this.setState({ questions: sortedQuestions });
  }

  renderQuestions() {
    const { questions, questionsDisplayed } = this.state;
    if (questions.clues_count === 0) return "No questions available";

    let result = [];
    for (let i = 1; i < questionsDisplayed + 1; i++) {
      const points = "clues" + i * 100;
      const pointsList = questions[points];

      if (pointsList && pointsList.length > 0) {
        let q = pointsList[0];
        result.push(
          <Card
            onClick={() => {
              this.updateQuestion(q.value);
            }}
            key={q.id}
          >
            <Card.Body>
              <Card.Title>For {q.value} points:</Card.Title>
              <Card.Text>{q.question}.</Card.Text>
            </Card.Body>
          </Card>
        );
      }
    }

    return result;
  }

  updateQuestion(value) {
    console.log("next question");
  }

  render() {
    return (
      <Row className="justify-content-md-center">{this.renderQuestions()}</Row>
    );
  }
}

export default GameBoard;

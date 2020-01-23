import React, { Component } from "react";
import axios from "axios";
import { filterByYear, sortByPoints } from "../utils/QuestionsHandler";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

//gameboard manages each instance of a game, handling
//the available list of questions for various point values
//future enhancements would include handling of a player
//component that stores which questions a player has answered
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

  //on mount, the jeopardy api is called for all science category questions
  async componentDidMount() {
    const questions = await axios.get(
      "http://www.jservice.io/api/category?id=25"
    );
    //questions are filtered by year and sorted by point value
    const filteredQuestions = filterByYear(questions.data, 1996);
    const sortedQuestions = sortByPoints(filteredQuestions);
    this.setState({ questions: sortedQuestions });
  }

  //logic around which questions should be rendered,
  //along with error handling when none are available
  renderQuestions() {
    const { questions, questionsDisplayed } = this.state;
    if (!questions.clues_count || questions.clues_count === 0)
      return "No questions available";

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

  //to do: remove old question from the list so the next question can be displayed
  updateQuestion(value) {
    console.log("next question");
  }

  render() {
    return (
      <Row
        className="justify-content-md-center
      gameBoard__content"
      >
        {this.renderQuestions()}
      </Row>
    );
  }
}

export default GameBoard;

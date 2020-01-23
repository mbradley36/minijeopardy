import GameBoard from "./GameBoard";
import { shallow, configure, mount } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("GameBoard", () => {
  it("should match snapshot", () => {
    const gameBoard = shallow(<GameBoard />);
    expect(gameBoard).toMatchSnapshot();
  });

  //testing display when one point value runs out of questions
  it("should not draw cards for point values without questions", async () => {
    //this test relies on the async API call, so must be mounted rather than shallow
    const gameBoard = mount(<GameBoard />);
    await gameBoard.instance().componentDidMount();

    const state = gameBoard.state();
    state.questions.clues100 = [];
    gameBoard.setState({ questions: { ...state.questions } });
    expect(gameBoard.find("Card")).toHaveLength(4);
  });
});

//testing display when no point values have questions
describe("GameBoard", () => {
  beforeAll(() => {
    GameBoard.prototype.componentDidMount = () => {};
  });

  it("should display error when no questions are available", () => {
    const gameBoard = shallow(<GameBoard />);
    expect(gameBoard.find(".gameBoard__content").text()).toBe(
      "No questions available"
    );
  });
});

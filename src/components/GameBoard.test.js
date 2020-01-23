import GameBoard from "./GameBoard";
import { shallow, configure } from "enzyme";
import React from "react";

describe("<GameBoard />", () => {
  beforeAll(() => {
    GameBoard.prototype.componentDidMount = () => {};
  });

  it("should display error when no questions are available", () => {
    const wrapper = shallow(<GameBoard />);
    const errorMessage = getByText(/No questions available/);
    expect(errorMessage).toBeInTheDocument();
  });
});

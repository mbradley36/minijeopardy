import { filterByYear, sortByPoints } from "./QuestionsHandler";
import { shallow, configure } from "enzyme";
import React from "react";

describe("Questions Handler", () => {
  //mock data with attributes that are null, undefined, and missing
  const testData = {
    questions: {
      id: 25,
      title: "science",
      clues_count: 250,
      clues: [
        {
          value: 100,
          airdate: "1984-12-10T12:00:00.000Z"
        },
        {
          airdate: "1984-12-10T12:00:00.000Z"
        },
        {
          value: null
        },
        {
          value: undefined,
          airdate: "1980-12-10T12:00:00.000Z"
        }
      ]
    }
  };

  //tests
  it("questions handler should filter by date", () => {
    const filteredData = filterByYear(testData.questions, 1984);
    for (let d in filteredData) {
      const year = new Date(Date.parse(d.airdate)).getFullYear();
      expect(year === 1984);
    }
  });

  it("questions should be sorted by points", () => {
    const sortedData = sortByPoints(testData.questions);
    expect(sortedData.clues100.length === 1);
  });
});

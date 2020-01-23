export function parseByYear(questions, year) {
  //check year on each date in questions list
  const cluesInYear = questions.clues.filter(
    q => new Date(Date.parse(q.airdate)).getFullYear() === 1996
  );
  //reassign the returned questions to the filtered set and update count
  questions.clues = cluesInYear;
  questions.clues_count = cluesInYear.length;
  return questions;
}

export function sortByPoints(questions) {
  questions.clues100 = questions.clues.filter(q => q.value === 100);
  questions.clues200 = questions.clues.filter(q => q.value === 200);
  questions.clues300 = questions.clues.filter(q => q.value === 300);
  questions.clues400 = questions.clues.filter(q => q.value === 400);
  questions.clues500 = questions.clues.filter(q => q.value === 500);

  return questions;
}

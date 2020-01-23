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

export default function computeQuestion(question, choice) {
  let correct = ''

  if (question.correct_answers.answer_a_correct) {
    correct = 'A'
  }

  if (question.correct_answers.answer_b_correct) {
    correct = 'B'
  }

  if (question.correct_answers.answer_c_correct) {
    correct = 'C'
  }

  if (question.correct_answers.answer_d_correct) {
    correct = 'D'
  }

  return choice == correct
}

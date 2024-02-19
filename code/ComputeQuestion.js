import console from 'console'

export default function computeQuestion(input) {
  let isCorrect = false

  console.log(input.answer_a)
  console.log(input.answer_b)
  console.log(input.answer_c)
  console.log(input.answer_d)

  if (input.answer_a === 'true') {
    isCorrect = true
  }

  if (input.answer_b === 'true') {
    isCorrect = true
  }

  if (input.answer_c === 'true') {
    isCorrect = true
  }

  if (input.answer_d === 'true') {
    isCorrect = true
  }

  if (isCorrect) {
    return 'Correct answer!'
  } else {
    return 'Sorry, the answer was incorrect, try again.'
  }
}
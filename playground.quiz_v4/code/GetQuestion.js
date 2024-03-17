import console from 'console'
import QUESTIONS from './Data.js'

export default function getQuestion({difficulty = null, category = null}) {

  console.log(difficulty, category)

  const singleResponse = QUESTIONS[Math.floor((Math.random() * 100) / 40)]

  console.log ("singleResponse = ", singleResponse)

  return {
    id: singleResponse.id,
    question: singleResponse.question,
    answers: singleResponse.answers,
    correct_answers: singleResponse.correct_answers,
    category: singleResponse.category,
    difficulty: singleResponse.difficulty
  }
}

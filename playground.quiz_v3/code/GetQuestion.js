import console from 'console'
import QUESTIONS from './Data.js'

export default function getQuestion({difficulty = null, category = null}) {

  console.log(difficulty, category)
  let questions = QUESTIONS
  if (category) {
    questions = QUESTIONS.filter(e => e.category === category)
  }

  if (difficulty) {
    questions = QUESTIONS.filter(e => e.difficulty === difficulty)
  }

  const singleResponse = questions[Math.floor((Math.random() * 100) / questions.length)]

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

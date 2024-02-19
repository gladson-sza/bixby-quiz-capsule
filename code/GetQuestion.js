import http from 'http'
import console from 'console'

export default function getQuestion({difficulty = null, category = null}) {
  const url = 'https://quizapi.io/api/v1/questions'
  const options = {
    format: 'json',
    query: {
      apiKey: 'CB2SIM7VFEknEArr008Y7vVwn7UngI3dWqUpAF6H',
      limit: 1,
      difficulty: difficulty,
      category: category
    }
  }

  const response = http.getUrl(url, options);
  console.log ("response = " + response)

  const singleResponse = response[0]

  return {
    id: singleResponse.id,
    question: singleResponse.question,
    answers: singleResponse.answers,
    correct_answers: singleResponse.correct_answers,
    category: singleResponse.category,
    difficulty: singleResponse.difficulty
  }
}

const quizContainer = document.querySelector('.quiz-container')
const questionsContainer = quizContainer.querySelector('.questions-container')
const submitBtn = quizContainer.querySelector('.submit-btn')
const resultContainer = quizContainer.querySelector('.result-container')
const questionTemplate = document.querySelector('#question-template')

let numCorrect = 0
let answeredQuestions = 0

const quizData = [
  {
    question: 'Where is Mississippi located?',
    options: ['West', 'South', 'North'],
    answer: 'South'
  },
  {
    question: 'Where is Zion from?',
    options: ['Another World', 'Mississippi' , 'Africa'],
    answer: 'Mississippi'
  },
  {
    question: 'Which city has a beach?',
    options: ['Arkansas', 'Florida', 'Wyoming'],
    answer: 'Florida'
  },
  {
    question: 'Which species of bee can recognize a human face?',
    options: ['Longhornbee', 'Honeybee', 'Leafcutterbee', 'Killerbee'],
    answer: 'Honeybee'
  },
  {
    question: 'What Pet does Zion have?',
    options: ['Cat', 'Ladybug', 'CatDog', 'Hamster'],
    answer: 'Cat'
  },
  {
    question: 'Does Hoyt cook?',
    options: ['Yes', 'No', 'Maybe', 'No Idea'],
    answer: 'Yes'
  },
  {
    question: 'Will Everyone finish this bootcamp?',
    options: ['yes', 'yes', 'yes', 'yes'],
    answer: 'yes'
  },
  {
    question: 'Are Dylan and Lucas great teachers?',
    options: ['yes', 'no', 'horrible', 'greatest teachers ever'],
    answer: 'greatest teachers ever'
  },
  {
    question: 'Have bees ever been know to follow a car for days because their queen was stuck in the car?',
    options: ['Yes', 'No it was for 5', 'yes', 'no'],
    answer: ['Yes']
  },
  {
    question: 'Zion is the weird',
    options: ['True', 'False'],
    answer: 'True'
  }
]

quizData.forEach((question, index) => {
  const questionBox = questionTemplate.content.cloneNode(true).querySelector('.question-box')
  const questionNumber = questionBox.querySelector('.question-number')
  const questionText = questionBox.querySelector('.question-text')
  const answerOptions = questionBox.querySelector('.answer-options')
  const submitAnswerBtn = questionBox.querySelector('.submit-answer-btn')

  questionNumber.textContent = `Question ${index + 1}:`
  questionText.textContent = question.question

  question.options.forEach(option => {
    const label = document.createElement('label')
    const input = document.createElement('input')
    input.type = 'radio'
    input.name = `q${index + 1}`
    input.value = option
    label.append(input, option)
    answerOptions.appendChild(label)
  })

  submitAnswerBtn.addEventListener('click', () => {
    const selectedAnswer = answerOptions.querySelector('input:checked')
    if (!selectedAnswer) return

    const isCorrect = Array.isArray(question.answer)
      ? question.answer.map(ans => ans.toLowerCase()).includes(selectedAnswer.value.toLowerCase())
      : selectedAnswer.value.toLowerCase() === question.answer.toLowerCase()

    questionBox.classList.toggle('correct', isCorrect)
    questionBox.classList.toggle('incorrect', !isCorrect)
    selectedAnswer.disabled = true
    submitAnswerBtn.disabled = true
    numCorrect += isCorrect ? 1 : 0
    answeredQuestions++
  })

  questionsContainer.appendChild(questionBox)
})

submitBtn.addEventListener('click', () => {
  resultContainer.textContent = `You got ${numCorrect} out of ${quizData.length} questions correct!`
})

class Questionnaire {
  this.questions = [
    {
      id: 1,
      text: "I want to use the streaming service for",
      answerTextAmazon: "films, documentations",
      answerTextNetflix: "series",
      userAnswer: ""
    },
    {
      id: 2,
      text: "I want to use it ...",
      answerTextAmazon: "sometimes",
      answerTextNetflix: "often",
      userAnswer: "Netflix"
    }
  ]
  constructor() {

  }

  getQuestion(i) {
    return questions[i]
  }

  get numberOfQuestions() {
    return questions.length
  }

  constructor(questions) {
    this.questions = questions
  }

  getNumberOfAmazon() {

  }
}

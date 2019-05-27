
class Questionnaire {

    this.questions = [

    fetch('../json/db.json')

    .then(function(resp){
        return resp.json();
    })
    .catch(function(){

    });
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
  function fillHtmlBlock()
  {
    document.getElementById('question').innerHTML = question

  }
}

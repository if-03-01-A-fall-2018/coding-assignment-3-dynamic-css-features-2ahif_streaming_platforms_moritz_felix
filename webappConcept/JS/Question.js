
class Questionnaire
{
  var i = 0;

  var obj = document.getElementById('questionBlock');
  obj.addEventListener("load", fillHtmlBlock, false);


    this.questions = [

    fetch('../json/db.json')

    .then(function(resp){
        return resp.json();
    })
    .catch(function(){

    });
  ]
<<<<<<< HEAD
  
=======

  constructor()
  {

  }

>>>>>>> 09ebfda447620ee7773d437984008831b1d7ef08
  getQuestion(i)
  {
    return questions[i]
  }

  get numberOfQuestions()
  {
    return questions.length
  }

  constructor(questions)
  {
    this.questions = questions
  }

  function fillHtmlBlock()
  {
    document.getElementById('question').innerHTML = questions[i].text;
    document.getElementById('q1').innerHTML = questions[i].answerTextNetflix;
    document.getElementById('q2').innerHTML = questions[i].answerTextAmazon;
    i++;
  }
}

function tabulateAnswers() {

var netflix = 0;
var apv = 0;

var choices = document.getElementsByTagName('input');

for (i=0; i<choices.length; i++) {

  if (choices[i].checked) {

    if (choices[i].value == 'c1') {
      netflix++;
    }
    if (choices[i].value == 'c2') {
      apv++;
    }
  }
}


var maxscore = Math.max(netflix,apv);


var answerbox = document.getElementById('answer');
if (netflix == maxscore) {
  answerbox.innerHTML = "1";
}
if (apv == maxscore) {
  answerbox.innerHTML = "2";
}
}


function resetAnswer() {
var answerbox = document.getElementById('answer');
answerbox.innerHTML = "Your result will show up here!";
}

var questionIndex = 0;
var questions;

window.onload = function() {
  fetch('http://localhost:3000/questions')
  .then(response => {
              if (!response.ok) {
                  throw new Error("HTTP error " + response.status);
              }
              return response.json();
          })
    .then(jsonanswer => {
      questions = jsonanswer;
      fillHtmlBlock();
    })
    .catch(function(){
      alert("pfui");
    });
}

function fillHtmlBlock()
{
  var question = questions[questionIndex];
  document.getElementById('question').innerHTML = questions[questionIndex].text;
  document.getElementById('q1').innerHTML = questions[questionIndex].answerTextNetflix;
  document.getElementById('q2').innerHTML = questions[questionIndex].answerTextAmazon;
  questionIndex++;
}

function tabulateAnswers()
{

  var netflix = 0;
  var apv = 0;

  var choices = document.getElementsByTagName('input');

  for (i=0; i<choices.length; i++)
  {

    if (choices[i].checked)
    {

    if (choices[i].value == 'c1')
    {
        netflix++;
    }

    if (choices[i].value == 'c2')
    {
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

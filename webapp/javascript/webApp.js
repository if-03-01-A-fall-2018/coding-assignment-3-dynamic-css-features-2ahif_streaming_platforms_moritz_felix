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
  console.log(questionIndex);
  setDefault();

  displayGauge();

  if (questionIndex >= questions.length)
  {
      document.getElementsByClassName('prev').style.display = 'none';
      return;
  }

  if (questionIndex + 1 == questions.length)
  {
    document.getElementsByClassName('next').style.display = 'none'
    document.getElementsByClassName('btn-finish').style.display = 'flex';
  }

  var question = questions[questionIndex];

  document.getElementById('question').innerHTML = questions[questionIndex].text;
  var q1 = document.getElementById('labelQ1').innerHTML = questions[questionIndex].answerTextNetflix;
  var q2 = document.getElementById('labelQ2').innerHTML = questions[questionIndex].answerTextAmazon;

  if (questionIndex >= 1) {
    document.getElementsByClassName('prev').style.display = 'flex';
  }

  questionIndex++;
}

function prevQuestion()
{
  if (questionIndex <= 1)
  {
    document.getElementsByClassName('prev').style.display = 'none';
    return;
  }
  questionIndex = questionIndex - 2;
  var question = questions[questionIndex];

  document.getElementById('question').innerHTML = questions[questionIndex].text;
  var q1 = document.getElementById('labelQ1').innerHTML = questions[questionIndex].answerTextNetflix;
  var q2 = document.getElementById('labelQ2').innerHTML = questions[questionIndex].answerTextAmazon;
  displayGauge();
  questionIndex++;
  console.log(questionIndex);

}

function setDefault()
{
  document.getElementById('q1').checked = false;
  document.getElementById('q2').checked = false;
}

function displayGauge()
{
  var gauge = document.getElementById('gauge');
  var value = questionIndex;

  gauge.innerHTML = " <meter value='"+ value + "' min='0' max='"+ questions.length +"'></meter>";
}

/*function updateAnswerTable()
{
  var qIndex = "q"+questionIndex;

  if (document.getElementById('q1').checked == true || document.getElementById('q2').checked == true)
  {
    document.getElementById(qIndex).style.backgroundColor = "green";
  }
  else {
    document.getElementById(qIndex).style.backgroundColor = "red";
  }

}*/

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

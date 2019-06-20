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
      alert("something went wrong with your json server");
    });
}

function fillHtmlBlock()
{
  setDefault();

  displayGauge();

  if (questionIndex >= questions.length)
  {
      document.getElementById('btn-prev').style.display = 'none';
      return;
  }

  if (questionIndex + 1 == questions.length)
  {
    document.getElementById('btn-next').style.display = 'none'
    var btnfinish = document.getElementById('btn-finish');
    btnfinish.setAttribute('style', 'display: flex !important');

  }

  var question = questions[questionIndex];

  document.getElementById('question').innerHTML = questions[questionIndex].text;
  var q1 = document.getElementById('labelQ1').innerHTML = questions[questionIndex].answerTextNetflix;
  var q2 = document.getElementById('labelQ2').innerHTML = questions[questionIndex].answerTextAmazon;

  if (questionIndex >= 1)
  {
    document.getElementById('btn-prev').style.display = 'flex';
  }

  questionIndex++;
}

function prevQuestion()
{
  if (questionIndex <= 1)
  {
    document.getElementById('btn-prev').style.display = 'none';
    return;
  }

  if (questionIndex <= questions.length)
  {
    console.log("hey");
    document.getElementById('btn-next').style.display = 'flex'
    document.getElementById('btn-finish').style.display = 'none';
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

  gauge.innerHTML = " <meter value='"+ questionIndex + "' min='0' max='"+ questions.length +"'></meter>";
}

function tabulateAnswers()
{

  displayGauge();
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
    answerbox.innerHTML = "The better choice for you is Netflix <a href="'streamingservices.html'">About Netflix</a>";
  }
  if (apv == maxscore) {
    answerbox.innerHTML = "The better choice for you is Amazon Video <a href="'streamingservices.html'">About Amazon Prime</a>";
  }
}

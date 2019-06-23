var questionIndex = 0;
var questions;
var netflix = 0;
var apv = 0;

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

  if (questionIndex >= 1)
  {
    document.getElementById('btn-prev').style.display = 'flex';
    evaluateInput();
  }

  var question = questions[questionIndex];

  document.getElementById('question').innerHTML = questions[questionIndex].text;
  var q1 = document.getElementById('labelQ1').innerHTML = questions[questionIndex].answerTextNetflix;
  var q2 = document.getElementById('labelQ2').innerHTML = questions[questionIndex].answerTextAmazon;


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

}

function setDefault()
{
  document.getElementById('q1').checked = false;
  document.getElementById('q2').checked = false;
}

function displayGauge()
{
  var value = questionIndex/question.length;
  var pb = document.getElementById('bar');
  pb.value = questionIndex;
}

function evaluateInput()
{
  console.log(document.getElementById('q1').checked);
  console.log(document.getElementById('q2').checked);
  if (document.getElementById('q1').checked == true) {
    alert("lalal");
    netflix++;
  }
  if (document.getElementById('q2').checked == true) {
    alert("lulul");
    apv++;
  }
  console.log(netflix);
  console.log(apv);
}

function ShowResult()
{
  displayGauge();

  var btnfinish = document.getElementById('btn-finish');
  btnfinish.setAttribute('style', 'display: none !important');

  var maxscore = Math.max(netflix,apv);

  var answerbox = document.getElementById('answer');
  if (netflix == maxscore) {
    answerbox.innerHTML = "The better choice for you is Netflix <a href=\"../../html/streamingservices.html\">About Amazon</a><br>";
  }
  if (apv == maxscore) {
    answerbox.innerHTML = "The better choice for you is Amazon Video <a href=\"../../html/streamingservices.html\">About Amazon</a>";
    console.log(apv);
    console.log(questions.length);
    var string = String(apv/questions.length);
    answerbox.innerHTML += string+"%";
  }
}

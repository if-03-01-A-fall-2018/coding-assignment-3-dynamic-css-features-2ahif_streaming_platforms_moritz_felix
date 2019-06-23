let questionIndex = 0;
let questions;
let netflix = 0;
let apv = 0;
let answerArray = new Array(8);

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

function changeState()
{
  console.log(document.getElementById('btn-next').disabled);
  document.getElementById('btn-next').disabled = false;

  document.getElementById('btn-next').classList.remove("disabled-button");
}

function fillHtmlBlock()
{
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
  setDefault();
  document.getElementById('btn-next').disabled = true;
  document.getElementById('btn-next').classList.add("disabled-button");
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

  if (answerArray[questionIndex] == "netflix")
  {
      netflix--;
  }
  else {
    apv--;
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

  if (document.getElementById('q1').checked == true)
  {
    answerArray[questionIndex] = "netflix";
    netflix++;
  }
  if (document.getElementById('q2').checked == true)
  {
    answerArray[questionIndex] = "ap";
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
    answerbox.innerHTML = "The better choice for you is Netflix <a href=\"../../html/streamingservices.html\">About Netflix</a><br>";
  }
  if (apv == maxscore) {
    answerbox.innerHTML = "The better choice for you is Amazon Video <a href=\"../../html/streamingservices.html\">About Amazon</a>";
    console.log(apv);
    console.log(questions.length);
    var string = String(apv/questions.length);
    answerbox.innerHTML += string+"%";
  }
}

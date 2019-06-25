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
  document.getElementById('btn-next').disabled = false;
  document.getElementById('btn-next').classList.remove("disabled-button");
}

function fillHtmlBlock()
{
  var btnNext = document.getElementById('btn-next');
  var btnPrev = document.getElementById('btn-prev');
  displayGauge();

  if (questionIndex >= questions.length)
  {
      btnPrev.style.display = 'none';
      return;
  }

  if (questionIndex + 1 == questions.length)
  {
    btnNext.style.display = 'none'
    var btnfinish = document.getElementById('btn-finish');
    btnfinish.setAttribute('style', 'display: flex !important');
  }

  if (questionIndex >= 1)
  {
    btnPrev.style.display = 'flex';
    evaluateInput();
  }

  var question = questions[questionIndex];

  document.getElementById('question').innerHTML = questions[questionIndex].text;
  var q1 = document.getElementById('labelQ1').innerHTML = questions[questionIndex].answerTextNetflix;
  var q2 = document.getElementById('labelQ2').innerHTML = questions[questionIndex].answerTextAmazon;

  if (answerArray[questionIndex] == "netflix") {
    document.getElementById('q1').checked = true;
  }
  else {
    document.getElementById('q2').checked = true;
  }

  questionIndex++;
  setDefault();
  btnNext.disabled = true;
  btnNext.classList.add("disabled-button");
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

  if (answerArray[questionIndex] == "netflix") {
    document.getElementById('q1').checked = true;
  }
  else {
    document.getElementById('q2').checked = true;

  }

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
}

function ShowResult()
{
  displayGauge();

  var btnfinish = document.getElementById('btn-finish');
  btnfinish.setAttribute('style', 'display: none !important');

  var maxscore = Math.max(netflix,apv);

  var answerbox = document.getElementById('answer');
  if (netflix == maxscore) {
    answerbox.innerHTML = "The better choice for you is Netflix. Click <a href=\"../../html/streamingservices.html\">Here</a> for futher information<br>";
      answerbox.innerHTML += String(parseInt((((maxscore+1)/questions.length)*100)))+"%";
      console.log(maxscore);
  }
  if (apv == maxscore) {
    answerbox.innerHTML = "The better choice for you is Amazon Video. Click here for futher information <a href=\"../../html/streamingservices.html\">About Amazon</a>";
    answerbox.innerHTML += String(parseInt((((maxscore+1)/questions.length)*100)))+"%";
  }
}

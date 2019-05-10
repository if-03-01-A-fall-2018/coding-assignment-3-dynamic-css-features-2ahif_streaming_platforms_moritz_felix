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

function ShowBlock2()
{
  document.getElementById("block1").style.visibility = "hidden";
  document.getElementById("block2").style.visibility = "visible";
  document.getElementById("button1").style.visibility = "hidden";
  document.getElementById("button2").style.display = "flex";
}

function ShowBlock3()
{
  document.getElementById("block2").style.visibility = "hidden";
  document.getElementById("block3").style.visibility = "visible";
  document.getElementById("button2").style.display = "none";
  document.getElementById("button3").style.display = "flex";
}
function ShowBlock4()
{
  document.getElementById("block3").style.visibility = "hidden";
  document.getElementById("block4").style.visibility = "visible";
  document.getElementById("button3").style.display = "none";
  document.getElementById("button4").style.display = "flex";
}

function ShowBlock5()
{
  document.getElementById("block4").style.visibility = "hidden";
  document.getElementById("block5").style.visibility = "visible";
  document.getElementById("button4").style.display = "none";
  document.getElementById("button5").style.display = "flex";
}
function ShowBlock6()
{
  document.getElementById("block5").style.visibility = "hidden";
  document.getElementById("block6").style.visibility = "visible";
  document.getElementById("button5").style.display = "none";
  document.getElementById("button6").style.display = "flex";
}

function ShowBlock7()
{
  document.getElementById("block6").style.visibility = "hidden";
  document.getElementById("block7").style.visibility = "visible";
  document.getElementById("button6").style.display = "none";
}

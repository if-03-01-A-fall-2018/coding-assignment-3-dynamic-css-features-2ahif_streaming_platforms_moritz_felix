<<<<<<< HEAD
window.onload = function() {
  fetch('http://localhost:3000/questions')
    .then(function(resp){
        console.log(resp.json())
    })
    .catch(function(){
      alert("pfui");
    });
}

=======
>>>>>>> 09ebfda447620ee7773d437984008831b1d7ef08
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

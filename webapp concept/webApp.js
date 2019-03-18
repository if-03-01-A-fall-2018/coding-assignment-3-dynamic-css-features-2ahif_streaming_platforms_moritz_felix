function tabulateAnswers() {

  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;


  var choices = document.getElementsByTagName('input');

  for (i=0; i<choices.length; i++)
  {

    if (choices[i].checked)
    {

      if (choices[i].value == 'c1')
      {
        c1score = c1score + 1;
      }

      if (choices[i].value == 'c2')
      {
        c2score = c2score + 1;
      }

      if (choices[i].value == 'c3')
      {
        c3score = c3score + 1;
      }

      if (choices[i].value == 'c4')
      {
        c4score = c4score + 1;
      }

    }
  }

  var maxscore = Math.max(c1score,c2score,c3score,c4score);

  var answerbox = document.getElementById('answer');
  if (c1score == maxscore)
  {
    answerbox.innerHTML = "You are a computer researcher! You will enjoy developing algorithms, and doing things with computers no one else has done before. For example, researchers sent a robot to the moon, built a computer to beat the best humans in Jeopardy, and are creating robots to do your chores for you. Computer researchers typically go to college and work at universities, or as a part of the research and development team in companies.";
  }

  if (c2score == maxscore)
  {
    answerbox.innerHTML = "You are an altruistic coder! You love to help people and feel the positive impact of your work every day. Altrustic coders are out there every day making the world a better place. Computer scientists write software to more effectively help doctors diagnose illnesses such as cancer, connect people in third world countries to education and medical resources on the internet, code websites and software for nonprofit organizations, and much more!";
  }

  if (c3score == maxscore)
  {
    answerbox.innerHTML = "You are a developer! Developers create games, apps, social media, movies, and all sorts of fun programs that people enjoy. These coders work on projects such as Minecraft, Poptropica, and Youtube. Developers need sharp coding skills, are great debuggers, and need to work well in a team of other developers.";
  }

  if (c4score == maxscore)
  {
    answerbox.innerHTML = "You are the future CEO of a new startup! You enjoy taking risks and building the next big thing that no one has even thought of before. For example, billionare Mark Zuckerberg founded Facebook in 2004, a project he started inside his dorm room in college which eventually turned into a social networking revolution that changed the world.";
  }

}

$( '.btn-read-more' ).click(function() {
        var id = $(this).attr('id');
            if(id=="read-one") {
                $("#read-one").hide(300, function () {
                    $("#para-one").show(300);
                });
         }
    });

function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
}

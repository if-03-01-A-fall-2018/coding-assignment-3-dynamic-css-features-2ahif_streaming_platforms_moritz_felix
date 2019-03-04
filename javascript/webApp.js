var netflx = 0;
var amazon = 0;

function CheckBox()
{

  console.log(netflix);

  console.log(amazon);

  if (document.getElementById("1").checked == true)
  {
    netflix++;
  }
  else if (document.getElementById("2").checked == true)
  {
    amazon++;
  }
  else if (document.getElementById("3").checked == true)
  {
    netflix++;
  }

  console.log(netflix);

  console.log(netflix);


  if (netflix > amazon)
  {
    console.log(netflix);
  }
  else
  {
    console.log(amazon);
  }

}

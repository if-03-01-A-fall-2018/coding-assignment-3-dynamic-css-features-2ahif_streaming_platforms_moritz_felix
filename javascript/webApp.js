var netflix = 0;
var amazon = 0;


function CheckBox()
{

}

if(document.getElementById("q1").checked == true || document.getElementById("q2").checked == true)
{
   netflix++;
}

else
{
   amazon++;
}
if (document.getElementById("submit").checked == true) {

}

var choice;

if (netflix > amazon)
{
  choice = "Netflix";
}
else {
  choice = "Amazon";
}


console.log(choice);

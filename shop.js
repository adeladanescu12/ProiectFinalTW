window.onload = () => {
    setTimeout(function(){confirm("Complete the form in order to buy tickets");},500);

    let i = 0;
    function change() {
    let doc = document.getElementById("Hello");
    let color = ["purple", "blue", "green", "black"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
    }
    setInterval(change, 1000);
    
    document.getElementById("Hello").style.color = "pink";//am modificat culoarea
    
    document.querySelector("h1").style.color="purple";
    /*document.querySelector("rc").style.color=generateRandomColor();*/
   

    
    const list = document.getElementsByTagName("div")[1];
    list.getElementsByTagName("h1")[0].style.color = "pink";

    const lista = document.getElementsByClassName("cls");
    lista[0].style.fontFamily = "Calibri";
}
 /*   
function generateRandomColor()
{
    var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return myRandomColor;
}
/*
function validare(text)
{
  var verifica = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(text.value.match(verifica))
  {
  alert("Valid email address!");
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  return false;
  }
}
*/


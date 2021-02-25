//Code teils aus folgender Quelle: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
var mybutton;
function init()
{
  mybutton = document.getElementById("myBtn");

  var Nachname = sessionStorage.getItem("name");
  if (Nachname==null)
  {
    document.getElementById('Ansprache').parentNode.removeChild(document.getElementById('Ansprache'));
  }
  else
  {
    document.getElementById('AnspracheText').innerHTML += Nachname;
  }

  document.getElementById('Details').addEventListener('toggle',detailsAuf);

}

// When the user scrolls down 250px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function detailsAuf()
{
  document.body.scrollTop = document.body.clientHeight;
  document.documentElement.scrollTop = document.body.clientHeight;
}

window.addEventListener('DOMContentLoaded',init);

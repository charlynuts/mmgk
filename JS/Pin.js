function init2 ()
{
  var Pin = document.getElementById('Pin');
  document.getElementById("Formular").addEventListener("input", ueberpruefe);
}

function Quersumme (Zahl)
{
  var quer = 0;
  var zwischen = 0;
  while (Zahl !=0)
  {
    zwischen=Zahl%10
    quer+=zwischen
    Zahl=(Zahl-zwischen)/10
  }
  return quer;
}

function ueberpruefe() {
  if ( Pin.valueAsNumber > 9999 && Pin.valueAsNumber < 100000 && Pin.valueAsNumber % 3 == 0 && Pin.valueAsNumber % 5 == 0 && Pin.valueAsNumber % 13 == 0 && Quersumme(Pin.valueAsNumber)==27)
  {
    document.getElementById('Antwort').value = "Richtig";
  }
  else {
    document.getElementById('Antwort').value = "Falsch";
  }
}

window.addEventListener('DOMContentLoaded',init2);

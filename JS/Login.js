var Nachname, Passwort, elem;

function init()
{
    Nachname = document.getElementsByName("Nachname")[0];
    Passwort = document.getElementsByName("Passwort")[0];
    Nachname.focus(); //Eingabecursor in Nachnamenfeld platzieren
    elem = document.getElementById("Formular");
    elem.addEventListener("submit", Bestätigen);
    alert("Die Umsetzung der Passwortüberprüfung erfolgt auf Javascriptebene und sollte deshalb NIEMALS in dieser Art und Weise ernsthaft benutzt werden. Desweiteren ist die eigentliche Webseite nicht Passwortwortgeschützt. Die Adresse der eigentlichen Webseite und das Passwort sind einfach aus dem Javascript herauslesbar. Das Passwort lautet: '13Punkte'");
}

function Bestätigen()
{
  if (Passwort.value == "13Punkte")
  {
    sessionStorage.setItem("name", Nachname.value);
    window.open('HTML/Authentifizierung.html');
    window.close( );
  }
  else {
    alert("Das Passwort ist leider falsch. Bitte versuchen Sie es erneut!");
  }
}

window.addEventListener('DOMContentLoaded',init);

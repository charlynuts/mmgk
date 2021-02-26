Wir benutzen die sessionStorage Funktion. Diese unterstützt Firefox anscheinend nur, wenn die Webseite von einem Server geladen wird.
In Chrome geht das auch ohne Server. Die Funktion ist aber nicht unbedingt essentiell, aber nice to have.

Des Weiteren scheint aktuell die Funktion window.close() in Firefox buggy zu sein.
Eigentlich sollte sie in unserem Fall nicht funktionieren, da Firefox wohl das schließen einer Seite verhindert, 
wenn sie nicht durch dasselbe JavaScript geöffnet wurde.
Jedoch funktioniert die Funktion manchmal wie bei Chrome ohne diese Einschränkung und manchmal scheinbar nicht.
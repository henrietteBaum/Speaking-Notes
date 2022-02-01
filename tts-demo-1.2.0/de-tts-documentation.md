# Dokumentation

**Einfügen einer Vorlesefunktion in eine Webseite.**

## Die html-Datei

Das Grundgerüst der Webseite wird um die Element `textarea` und einen Button zum Start der Sprachausgabe ergänzt. Vor dem abschließenden body- Tag das script- Element mit dem Verweis auf die JavaScript- Datei plazieren. 

**Hinweis**: in VSCode eine neue Datei mit der Endung `.html` erstellen und dann im Editor einfach ein `! ` (Ausrufungszeichen) eingeben, das erscheinde Popup-Menu mit `Enter`  bestätigen. Damit wird eine vollständige html-Seite eingefügt, die man nur noch mit den gewünschten eigenen Elementen ergänzen muss.

Der Benutzer kann nun Text im Eingabefeld hinzufügen. Zur Verdeutlichung der Funktion des Feldes dient ein `placeholder`, man benötigt dann kein zusätzliches Label.

Der Button `Speek` wrid über einen EventListener mit dem JavaScript-Code verbunden und löst die Vorlesefunktion aus.

```html
<!DOCTYPE html>
<html lang="de-DE">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="tts1.css">
  <title>tts Demo 1</title>
</head>
<body>
  <div id="container">
    <h1>Text To Speech 📢</h1>
    <textarea type="text" id="input-field" placeholder="Type Text here..."></textarea>
    <button id="btn-speak">Speak</button>
  </div>
  <script src="app.js"></script>
</body>
</html>
```

Eine einfache css-Datei hierzu:

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100vh;
}

#container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vp;
  width: 100%;
  background-color: rgb(56, 54, 84);
}

h1 {
  font-size: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  margin: 20px;
  text-align: center;
}

textarea {
  width: 70%;
  height: 100%;
  padding: 20px 0;
  border-color: rgb(76, 76, 252);
  border-radius: 5px;
  outline: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 34px;
}

button {
  margin: 40px 0;
  padding: 10px 0;
  color: aliceblue;
  background-color: chocolate;
  border: none;
  outline: none;
  width: 70%;
  height: auto;
  font-size: 30px;
}
```



## Codebeispiel JavaScript



```js

const speakBtn = document.getElementById("btn-speak");

function textToSpeech() {
  const userText = document.getElementById("input-field").value;

  const speech = new SpeechSynthesisUtterance();
  speech.lang = "de.DE";
  speech.text = userText;
  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}
 
speakBtn.addEventListener('click', textToSpeech)
```

Zunächst wird das Button-Objekt der html- Datei in der Variablen `speakBtn` gespeichert, um es später einfacher weiterverwenden zu können.

Dann folgt die eigentliche Text-To-Speech Funktion. Innerhalb der Funktion wird der Inhalt des Eingabefeldes aus der Webseite in der Konstanden `userText` gespeichert.

Um etwas sprechen zu können, muss es eine "Äußerung" geben, die gesprchen werden kann. Diese Äußerung liefert das Objekt `new SpeechSynthesisUtterance()` , es wird ebenfalls für bessere Übrsichtlichkeit in einer Konstanten `speech` gespeichert.

Diesem Objekt können über die Punktnotation verschiedene Attribute, also Eigenschaften, zugeordnet werden. Beispielsweise  das Attribut `lang` , hier mit dem Wert `de-DE`. Dies bedeutet, es handelt sich um eine "Äußerung" in deutscher Sprache. 

Wichtig ist natürlich das Attribut `text` , das auf den Inhalt des Objekts verweist, Das Attribut hat als Wert die Konstante `userText`, in der wir oben den Inhalt des Eingabefeldes abgespeichert hatten.

Mit den drei übrigen Attributen setzt man den Wert für Lautstärke, Stimmhöhe und Sprechgeschwindigkeit.

Anschließend wird die Konstante  `speak` , die nun das Objekt `SpeechSynthesisUtterance` - also die Äußerung - nebst der Attribute enthält,  an die vorkonfiguriete Funktion Vorlesefunktion übergeben:

```js
window.speechSynthesis.speak(speech);
```

Unsere Funktion `textToSpeech()` fasst also das Erstellen des vorzulesenden Objekts und dessn Übergabe an die Vorlesefunktion der API zusammen. Daduch kann alles zusammen mit dem Button `Speek` verknüpft werden.

Hierzu wird ein `EventListener` genutzt, der die Funktion `textToSpeech()` aufruft, wenn er angeklickt wird. 
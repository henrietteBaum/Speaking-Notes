
const speakBtn = document.getElementById("btn-speak");

function textToSpeech(params) {
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
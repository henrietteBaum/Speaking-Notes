
const speakBtn = document.getElementById("btn-speak");
const pauseBtn = document.getElementById('btn-pause');
const stopBtn = document.getElementById('btn-stop');
const textInput = document.getElementById('input-field');

speakBtn.addEventListener('click', () => {
  playText(textInput.value);
});

pauseBtn.addEventListener('click', () => {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
});

stopBtn.addEventListener('click', () => {
  speechSynthesis.resume();
  speechSynthesis.cancel();
});


function playText(text) {
  const utterance = new SpeechSynthesisUtterance();
  utterance.addEventListener('end', () => {
    textInput.disabled = false
  });
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  if (speechSynthesis.speaking) {
    return;
  } 
    
  utterance.text = text;
  utterance.lang = 'de-DE';
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
}

/* function pauseSpeak() {
  if(speechSynthesis.speaking){
    speechSynthesis.pause();
  }
} */

/* function stopSpeak() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
} */

// my speek

/* function textToSpeech() {
  const userText = document.getElementById("input-field").value;
  const speech = new SpeechSynthesisUtterance();
  
  speech.lang = "de.DE";
  speech.text = userText;
  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}

speakBtn.addEventListener('click', textToSpeech); */



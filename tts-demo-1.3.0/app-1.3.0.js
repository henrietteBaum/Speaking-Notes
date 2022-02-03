

const textEl = document.getElementById('input-field');
const voiceInEl = document.getElementById('voices');
const speakEl = document.getElementById('btn-speak');

speakEl.addEventListener('click', speakText);

// update voices immediately and whenever they are loaded
updateVoices();
window.speechSynthesis.onvoiceschanged = updateVoices;



function updateVoices() {
  // add an option for each available voice that isn't already added
  window.speechSynthesis.getVoices().forEach(voice => {
    const isAlreadyAdded = [...voiceInEl.options].some(option => option.value === voice.voiceURI);
    if (!isAlreadyAdded) {
      const option = new Option(voice.name, voice.voiceURI, voice.default, voice.default);
      voiceInEl.add(option);
    }
  });
}

function speakText() {
    // stop any speaking in progress
    window.speechSynthesis.cancel();
  
    // create new utterance with all the properties
    const text = textEl.value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.voiceURI === voiceInEl.value);
    // utterance.pitch = pitchInEl.value;
    // utterance.rate = rateInEl.value;
    // utterance.volume = volumeInEl.value;
    
    // speak that utterance
    window.speechSynthesis.speak(utterance);
  }
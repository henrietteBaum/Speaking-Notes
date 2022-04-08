let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

document.querySelector("#talk").addEventListener('click', () => {
    speech.text = document.querySelector("textarea").value;
})

document.querySelector("#volume").addEventListener("input", () => {
    const selectedVolume = document.querySelector("#volume").value;
    speech.voice = selectedVolume;
    document.querySelector("#volume-label").innerHTML = selectedVolume;
});

document.querySelector("#rate").addEventListener("input", () => {
    const selectedRate = document.querySelector("#rate").value;
    speech.rate = selectedRate;
    document.querySelector("rate-label").innerHTML = selectedRate;
});

document.querySelector("#pitch").addEventListener("input", () => {
    const selectedPitch = document.querySelector("#pitch").value;
    speech.pitch = selectedPitch;
    document.querySelector("pitch-label").innerHTML = selectedPitch;
});

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => (voiceSelect.option[i] = new Option(voice.name, i)));
};

document.querySelector("#voices").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voices").value];
});

document.querySelector("#talk").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
});

document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
});

document.querySelector("#cancel").addEventListener("click", () => {
    window.speechSynthesis.cancel();
});

let utterance= new SpeechSynthesisUtterance();
let voices = [];


window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  utterance.voice = voices[0];

  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};
function speak()
{
    
utterance.voice = voices[document.querySelector("#voices").value];
utterance.text=document.querySelector("textarea").value;
window.speechSynthesis.speak(utterance)
}
function pase()
{
    window.speechSynthesis.pause();
}
function resume()
{
    window.speechSynthesis.resume();
}
function cancel()
{
    window.speechSynthesis.cancel();
}
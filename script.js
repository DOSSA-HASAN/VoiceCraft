//Creating a SpeechSynthesisUtterance Object
let speech = new SpeechSynthesisUtterance();

let voice = [];

document.querySelector('button').addEventListener('click', ()=>{
    //Setting the Text to be Spoken
    speech.text = document.querySelector('textarea').value;

    //Speaking the Text
    window.speechSynthesis.speak(speech);
})
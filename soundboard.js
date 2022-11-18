var crash = new Audio();
crash.src = "audio/crash.wav";

var hi = new Audio();
hi.src = "audio/hi_hat.wav";

var kick = new Audio();
kick.src = "audio/kick.wav";

var snare = new Audio();
snare.src = "audio/snare_off.wav";

var splash = new Audio();
splash.src = "audio/splash.wav";

var tom = new Audio();
tom.src = "audio/tom_high.wav";

var crashButtonElement = document.getElementById('crash-button')
crashButtonElement.addEventListener('mouseenter', (event) => {
    crash.play();
});

var hiButtonElement = document.getElementById('hi-button')
hiButtonElement.addEventListener('mouseenter', (event) => {
    hi.play();
});

var kickButtonElement = document.getElementById('kick-button')
kickButtonElement.addEventListener('mouseenter', (event) => {
    kick.play();
});

var snareButtonElement = document.getElementById('snare-button')
snareButtonElement.addEventListener('mouseenter', (event) => {
    snare.play();
});

var splashButtonElement = document.getElementById('splash-button')
splashButtonElement.addEventListener('mouseenter', (event) => {
    splash.play();
});

var tomButtonElement = document.getElementById('tom-button')
tomButtonElement.addEventListener('mouseenter', (event) => {
    tom.play();
});
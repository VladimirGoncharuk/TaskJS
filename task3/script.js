const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
const trafficLightEl = document.querySelector('section');

trafficLightEl.addEventListener('click', makeGreen);

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen );   
    
    trafficLightEl.addEventListener('click', (event)=>{trafficLightEl1.style.background = ('black')});
    
    trafficLightEl.addEventListener('click', makeYellow)
   
}
   
function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow );   
    trafficLightEl.addEventListener('click', (event)=>{trafficLightEl2.style.background = ('black')});
    trafficLightEl.addEventListener('click',makeRed)
}
function makeRed() {
    trafficLightEl3.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed );   
    trafficLightEl.addEventListener('click', (event)=>{trafficLightEl3.style.background = ('black')});
    trafficLightEl.addEventListener('click', makeGreen);
}



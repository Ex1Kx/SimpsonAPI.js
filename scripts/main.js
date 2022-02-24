const card = document.querySelector('#card');
const character = document.querySelector('#character');
const quote = document.querySelector('#quote');
const imgg = document.querySelector('#imgg');
const btnGet = document.querySelector('#getAPI');

btnGet.addEventListener("click", getSimpson);

const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

function getSimpson() {
    fetch(URL)
    .then(response => response.json())
    .then(data=>{
        character.textContent = data[0].character;
        quote.textContent = data[0].quote;
        imgg.setAttribute("src", data[0].image);
        imgg.setAttribute("alt", data[0].character);
    });
    
    
}
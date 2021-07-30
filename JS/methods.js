//Get elements in HTML
const searchInput = document.querySelector('.search-input'),
    searchButton = document.querySelector('.search-button'),
    container = document.querySelector('.pokemon'),
    erroMessage = document.querySelector('.error');

//Store some values from request or input
var pokeName, // Value in HTML input
    pokemon, // Store API request return
    card; // Build the Poke card

//Create a card for the view
function createCard() {
    card =
        `<div class="container">
            <div class="box">
                <h2 class="name">${pokemon.name}</h2>
                <a href="#" class="edit">Nº ${pokemon.id}</a>
                <div class="circle"></div>
                <img src="${pokemon.sprites.front_default}" class="deckbox" alt="Sprite of ${pokemon.name}">
            </div>
        </div>`;
        
    return card;
}

function startApp(pokeName) {
    requestPokemon(baseUrl, pokeName);

    // Wait 2 seconds and insert the card in html,
    // this prevents the async method has not 
    // caught the values yet.
    setTimeout(function () {
        container.innerHTML = createCard();
    }, 2000);
}

//Call event listener for the searchbox button
searchButton.addEventListener('click', event => {
    event.preventDefault();
    pokeName = searchInput.value.toLowerCase();
    startApp(pokeName);
});
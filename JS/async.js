//Base Pokemon API endpoint
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

//Configure options
const fetchOptions = {
    method: 'GET',
    redirect: 'follow',
    mode:'cors',
    cache: 'default'
};

//Fetch function to request pokémon API
function requestPokemon(baseUrl, name){
    fetch(baseUrl + name, fetchOptions)
        .then(response => {
            //Error Handling
            if(!response.ok) throw new Error('The request failed'); 
            return response.json();
        })
        .then(data => { 
            //Store and return data value
            return pokemon = data;
        })
        .catch(err => console.log(err));
}

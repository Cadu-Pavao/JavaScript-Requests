//Base Pokemon API endpoint
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Request pokemon API Sync
function requestPokemon(baseUrl, name){
    var req = new XMLHttpRequest();

    req.onload = function(){
        if(this.status === 200){
            let data = JSON.parse(this.response); //Parse the content of response, 
                                                  //and transform in a JSON Object
             return pokemon = data;
        }
    }
    
    req.open('GET', baseUrl+name, false);//initialize a request for content of baseUrl sync
    req.send();
}
import {API_KEY} from './keys.js';

// Fetch and display a random GIF using the Giphy API
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=cats&rating=g`)
.then(function(response){
    return response.json();
})
.then(function(respData){
    console.log(respData);
})
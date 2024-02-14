import {API_KEY} from './keys.js';

// Fetch and display a random GIF using the Giphy API
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=cats&rating=g`)
.then(function(response){
    return response.json();
})
.then(function(respData){
    let gifURL = respData.data.images.original.url;
    let gifImageElement = document.createElement("img");
    gifImageElement.setAttribute("src", gifURL);
    document.body.appendChild(gifImageElement);
})
.catch(function(error){
    console.log("Error Detected: ", error);
})
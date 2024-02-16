import {API_KEY} from './keys.js';

// Fetch and display a random GIF using the Giphy API
function createNewGif(){
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=cats&rating=g`)
    .then(function(response){
        return response.json();
    })
    .then(function(respData){
        let gifURL = respData.data.images.original.url;

        // Create one image on screen. If image already exists, update
        let gifImageElement = document.getElementById("gif-element");
        if (!gifImageElement){
            let gifImageElement = document.createElement("img");
            gifImageElement.id = "gif-element";
            gifImageElement.setAttribute("src", gifURL);
            document.getElementById("gif-container").appendChild(gifImageElement);
        } else {
            gifImageElement.setAttribute("src", gifURL);
        }
        
    })
    .catch(function(error){
        console.log("Error Detected: ", error);
    })
}



// Capture user search term from search-form form
document.addEventListener('DOMContentLoaded', function(){  // Ensure JS code runs AFTER HTML document has been fully loaded so all elements accessible
    const searchForm = document.getElementById("search-form");
    
    searchForm.addEventListener("submit", function(event){
        
        event.preventDefault(); // Prevent form from submitting default way
        
        // Get value of the search-term input 
        const searchTerm = document.getElementById("search-term").value;
        console.log(searchTerm);
    });
});


// Create new gif when new gif button is pressed
const button = document.getElementById("new-gif");
button.addEventListener('click', createNewGif);

// Create new gif when page has been loaded
window.onload = createNewGif;
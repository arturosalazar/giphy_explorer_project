import {API_KEY} from './keys.js';

let searchTag = 'cats'; //Used in actual API Query (formatted)
let displaySearchTerm = 'cats'; //Displayed to screen as it was input (unformatted)
let searchURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTag}&rating=g`;

function updateSearchTag(newTag){
    searchTag = newTag;
    searchURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTag}&rating=g`;
}

// Fetch and display a random GIF using the Giphy API
function createNewGif(){
    fetch(searchURL)
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

        document.getElementById("current-search-tag").innerHTML = `Current Search Term: ${unformattedSearchTerm}`;
        
    })
    .catch(function(error){
        console.log("Error Detected: ", error);
    })
}

//parse input so it can be used as part of an API request
function parseInputForSearch(searchTerm){
    //Remove whitespace before/after
    const trimmed = searchTerm.trim();

    //Replace any whitespace between words with '+'
    const formatted = trimmed.replace(/\s+/g, '+');

    //Return the output
    return formatted;
}

// Capture user search term from search-form form
document.addEventListener('DOMContentLoaded', function(){  // Ensure JS code runs AFTER HTML document has been fully loaded so all elements accessible
    const searchForm = document.getElementById("search-form");
    
    searchForm.addEventListener("submit", function(event){
        
        event.preventDefault(); // Prevent form from submitting default way
        
        // Get value of the search-term input 
        const searchTerm = document.getElementById("search-term").value;
        displaySearchTerm = searchTerm;
        updateSearchTag(parseInputForSearch(searchTerm));
        createNewGif();
    });
});


// Create new gif when new gif button is pressed
const button = document.getElementById("new-gif");
button.addEventListener('click', createNewGif);

// Create new gif when page has been loaded
window.onload = createNewGif;
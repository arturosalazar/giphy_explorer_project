import {API_KEY} from './keys.js';

let searchTag = 'cats'; //Used in actual API Query (formatted)
let displaySearchTerm = 'Cats'; //Displayed to screen as it was input (unformatted)
let searchURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTag}&rating=g`;
let numOfGifs = 1;

function updateSearchTag(newTag){
    searchTag = newTag;
    searchURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTag}&rating=g`;
}

/**
 * Initiates an asynchronous API call to fetch a GIF URL. It uses async/await syntax 
 * to ensure the function returns a promise, which resolves to the URL string 
 * after the API call completes.
 *
 * @returns {Promise<string>} A promise that resolves to the URL string of the fetched GIF.
 * If an error occurs during the fetch operation, the function logs the error and 
 * may implicitly return 'undefined'.
 */
async function gifApiCall(){
    try {
        const response = await fetch(searchURL); // Await the response of the fetch call
        const respData = await response.json(); // Parse JSON response
        let gifURL = respData.data.images.fixed_height.url;
        return gifURL; // Waits for the fetch to complete before returning the GIF URL
    } catch (error){
        console.error("Error Detected: ", error); // Log any errors that occur during the fetch operation
    }
}

/**
 * Asynchronously fetch random GIF using Giphy API
 * Clears existing gif content
 * Updates screen to display newewst GIFs and current search tag
 */
async function displayGifs(){
    // Ensure the 'gif-container' is ready for new content by removing previous GIFs
    const gifContainer = document.getElementById("gif-container");
    while (gifContainer.firstChild){
        gifContainer.removeChild(gifContainer.firstChild);
    }

    // Ensure the 'gif-container-overflow' is ready for new content by removing previous GIFs
    const gifContainerOverflow = document.getElementById("gif-container-overflow");
    while (gifContainerOverflow.firstChild){
        gifContainerOverflow.removeChild(gifContainerOverflow.firstChild);
    }

    // Generate one gif to go into gif-container
    // Await the response of the gifAPICall function
    const gifURL = await gifApiCall();
        
    //Create a new element and set it's attributes
    let gifImageElement = document.createElement("img");
    gifImageElement.id = "gif-element";
    gifImageElement.setAttribute("src", gifURL);

    //Display gif element 
    document.getElementById("gif-container").appendChild(gifImageElement);

    // Create generate any extra gifs and display to gif-container-overflow
    for(let i = 1; i < numOfGifs; i++){
        // Await the response of the gifAPICall function
        const gifURL = await gifApiCall();
        
        //Create a new element and set it's attributes
        let gifImageElement = document.createElement("img");
        gifImageElement.id = "gif-element";
        gifImageElement.setAttribute("src", gifURL);

        //Display gif element 
        document.getElementById("gif-container-overflow").appendChild(gifImageElement);
    }

    //Update search values
    document.getElementById("current-search-tag").innerHTML = `${displaySearchTerm}`;
    document.getElementById("current-num-of-gifs").innerHTML = `${numOfGifs}`;
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
        const searchTermElement = document.getElementById("search-term");
        const searchTerm = searchTermElement.value;
        displaySearchTerm = searchTerm.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        updateSearchTag(parseInputForSearch(searchTerm));

        // Get value of number of gifs to display
        const numGifsElement = document.getElementById("number-of-gifs");
        const number = numGifsElement.value;
        numOfGifs = number;

        displayGifs();
    });
});


// Create new gif when new gif button is pressed
const button = document.getElementById("new-gif");
button.addEventListener('click', displayGifs);

// Create new gif when page has been loaded
window.onload = displayGifs;
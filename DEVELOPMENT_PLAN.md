# Detailed Development Plan

### Step 1: Display a Random GIF

    Goal: Fetch and display a random GIF using the Giphy API.
    Key Concepts: fetch() for API calls, handling Promises, DOM manipulation to insert the GIF into the page.
    Implementation:
        ~~Set up a basic HTML page~~
        ~~Use fetch() to make a GET request to the Giphy API's random endpoint.~~
        ~~Extract the GIF URL from the API response.~~
        ~~Create an Create an <img> element.~~
        ~~Set the src attribute of your <img> element to display the GIF.~~
        ~~Append <img> element to the body of the HTML page.~~
        ~~Add catch to catch errors that might occur from fetch and handling~~

### Step 2: Add a Button to Load Another Random GIF

    Goal: Allow the user to fetch a new random GIF without reloading the page.
    Key Concepts: Event listeners, asynchronous event handling.
    Implementation:
        ~~Add a button to your HTML.~~
        ~~Attach an event listener to the button that calls the function to fetch and display a new GIF when clicked.~~
        ~~Ensure event listener function will only create one image. Further clicks should simply update image~~

### Step 3: Enable Searching for GIFs

    Goal: Let users input a search term to find relevant GIFs.
    Key Concepts: Forms and input handling, modifying API requests based on user input.
    Implementation:
        ~~Add a text input field and a search button to your HTML.~~
        ~~Modify your fetch function to use the Giphy search endpoint, incorporating the user's search term from the input field.~~
        ~~Display random result from the search response.~~
        ~~Add HTML header to display current search term~~
        ~~Display current search term at top~~
        ~~Remove input to search field and refocus on field after user input~~
        ~~Move new gif button down to submit button (quality of life update)~~

### Step 4: Allow Users to Specify the Number of GIFs

    Goal: Enable users to choose how many GIFs to display.
    Key Concepts: More complex input handling, iterating over API response items.
    Implementation:
        ~Add a numeric input field for the user to specify the number of GIFs.~
        ~Refactor createNewGif function to empty gif container before adding new gif (will be needed so that can add any number of gifs later)~
        ~Separate API request from display function (needed to be able to display one or more gifs as needed)~
        ~Change createNewGifs to displayGifs to better represent functionality~
        ~Update API Request to select a fixed height for each gif~
        Adjust your display function to request to fetch the specified number of GIFs.
        Iterate over the GIFs in the response and display each in the page, ensuring your layout can dynamically adjust to the number of GIFs.

### Step 5: Improve the Layout and Style

    Goal: Enhance the visual presentation using Bootstrap.
    Key Concepts: Responsive design, using a CSS framework.
    Implementation:
        Integrate Bootstrap into your project.
        Use Bootstrap's grid system to create a responsive layout for displaying GIFs.
        Update styling on new-gif button so that it appears next to Submit button
        Utilize Bootstrap components for the input field, button, and other UI elements to improve aesthetics and usability.

### Step 6: Advanced Features and Polish

    Goal: Add additional functionality like saving favorite GIFs, sharing GIFs, or user authentication for personalized experiences.
    Key Concepts: Advanced API usage, possibly backend development, local storage.
    Implementation: Depending on the feature, you may need to:
        Implement local storage to save user favorites.
        Explore backend development to support features like user accounts or sharing.
        Refine the UI/UX based on user feedback or personal critique.

## Learning Resources:

    [Official Giphy API documentation for understanding endpoints and parameters.](https://developers.giphy.com/docs/api)
    MDN Web Docs for JavaScript, [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch), [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises), and [event handling](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers).
    [Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for grid layout and components.

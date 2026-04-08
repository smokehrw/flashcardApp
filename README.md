# Flashcard Learning App
Studying with traditional notes can be inefficient and sometimes counterintuitive for retaining information effectively. This application aims to digitize a widely used learning technique by utilising flashcards to improve active recall and long-term memory retention. In doing so, it allows users to organise information into decks and interact with their content dynamically, creating a more efficient and accessible way for better learning.

### Technical Stack
For this project the __MERN__ (MongoDB, Express.js, React.js, Node.js) stack was used.

* __Frontend__: React (components, hooks, etc.)

* __Styling__: CSS (custom styling with responsive layout)

* __Backend__: Node.js + Express.js

* __Database__: MongoDB (Mongoose ODM)

* __API Communication__: Fetch API (RESTful endpoints)

### Features:
* CRUD (Create, Read, Update, Delete) operations on flashcards and decks

* Flashcard flip on click

* Study mode to study terms and definitions of a user's deck

* RESTful API integration between frontend and backend

* Clean and minimal UI to help user focus

* Error handling for empty input fields or failed requests

* Dynamic UI updates without page reloads


____

### Folder Structure 
```
/flashcardApp
    /backend
        /models         
        /routes         
        /controllers    

    /frontend
        /public
        /src
            /components
            /context    
            /hooks      
            /pages      
```
The project has a clear separation of responsibilities where the frontend handles UI and user interaction, while the backend manages data storage and API logic.

### Summary of Challenges
One challenge was handling nested data relationships between decks and cards, requiring careful changes to the APIs, as there were various issues in the backend logic requiring careful debugging and iterative fixes taking up time to bring back correct functionality. Additionally, handling edge cases such as empty responses or server downtime required implementing proper error handling to improve the user experience. The main challenge was not in handling the edge cases themselves but in identifying what the possible edge cases are during development. While these improvements helped the application, it is important to note that the project may have not covered every edge case.



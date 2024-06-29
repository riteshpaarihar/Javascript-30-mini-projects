# Memory Cards

This project is a simple memory card application that allows users to create and flip through flashcards to help with studying and memorization. It uses HTML, CSS, and JavaScript to create an interactive experience.

## Features

- Add new memory cards with a question and answer.
- Flip the card to reveal the answer.
- Navigate between cards using next and previous buttons.
- Save cards to local storage so they persist between sessions.
- Clear all cards from local storage.

## Getting Started

### Prerequisites

To run this project locally, you'll need:

- A web browser
- A code editor (optional, but recommended)

### Installation

1. Clone the repository to your local machine:

```bash
git clone : https://github.com/riteshpaarihar/memory-cards.git
```

2. Navigate to the project directory: cd memory-cards
3. Open the index.html file in your web browser to view the application.

## Usage

- Click the "Add New Card" button to open the form to create a new card.
- Enter a question and answer, then click "Add Card" to save it.
- Use the next and previous buttons to navigate through the cards.
- Click on a card to flip it and reveal the answer.
- Click the "Clear Cards" button to remove all cards from local storage.

## Files

- index.html - The main HTML file that contains the structure of the application.
- style.css - The CSS file that contains the styles for the application.
- script.js - The JavaScript file that contains the logic for the application.

## Code Structure

- HTML: The HTML file contains the layout and structure of the app, including elements like buttons, containers, and forms.
- CSS: The CSS file styles the app, making it visually appealing and ensuring proper layout and design.
- JavaScript: The JavaScript file contains the logic for creating, navigating, and storing cards. It includes event listeners for user interactions and functions for manipulating the DOM and local storage.

## Local Storage

The application uses local storage to save the cards so that they persist even if the page is refreshed. The following functions handle local storage:

- getCardsData(): Retrieves the cards from local storage.
- setCardsData(cards): Saves the cards to local storage.

Thank you for checking out the Memory Cards ! If you have any questions or feedback, feel free to reach out.

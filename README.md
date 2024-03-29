# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

✅ As a user, I can see a page with a three by three grid board game with a question mark in each square.
Branch: grid

- Iterate on board state variable to display square component for each element
- Use styling to set up grid
- Setup a div for all boxes to be able to use flexbox.
- Passed the current value of the iterated board into Square props
- Show props inside of the div in Square
- Center and resize question mark

✅ - As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
Branch: alert-index

- Setup an onclick on the Square component div
- The onClick will trigger a handle click function that will have an alert with the index of the Square that is being clicked
- Will need to pass index as props to Square
- To gain access to the index being clicked, we need to pass index into a function on App.js from Square

✅ - As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
Branch: tree-emoji

- Create a copy of our state array
- Index allows us to use bracket notation to update the element that was clicked to a tree
- Update state using setBoard method with the modified copied array

✅ - As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.
Branch: winner-loser
- Randomize winning box index and store in a state variable.
- Randomize losing box index and store in a state variable.
- Create some conditional logic to check if selected box is the winning box or the losing box
- As a user, I can click on a “Play Again” button that will restart the game.
Branch: play-again
✅  - Create a button that refreshes the game board back to its original state.
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

# State and Side Effects

In this exercise, you'll implement code to run a function at the time a component has been mounted. You'll also recap what you've learned in the course so far, including the one of the trickier parts of React: managing state. Recall that React will re-render the UI when state changes inside of the component, as well as any time the value of the component's props changes. To begin:

1. Run `npm install` to install dependencies.
2. Run `npm start` to start the development server.
3. Open `./src/App.js` to review the provided starter code containing a template with dummy data.

# Task

Create a game that displays an equation of the form X+Y+Z=P. Note that X, Y, and Z represent random numbers, and P represents the proposed answer. The user should be able to answer whether it is true that the sum of X, Y, and Z equals the proposed answer P.

The user gets a point for each question they answer correctly. The score is displayed in this format: [number of correct answers]/[number of questions answered]. Every time the user answers a question, a new question that uses randomly generated numbers is displayed.

# Hint

Whenever the game initializes, it should create a new question (i.e., equation) to display to the user. Which hook can you leverage to run this effect?

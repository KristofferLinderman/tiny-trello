# Tiny Trello 🤏

Tiny Trello is a small Kanban board that allows you to create/delete Columns and Tasks to help manage your work better.

## Tech-stuff
Tiny Trello is built using React with TypeScript and uses Styled Components to make it look pretty 💄.

Tests are written using Jest + Testing Library. Currently only one Component has unit tests written for it. This is obviously not desirable, but was a decision made to save time in the development process while still showing some fundamental understanding of how to write unit tests.

The state is handled using the Context API within React, with the goal to use a combination of Context and useReducer to get a better and more performant state management.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
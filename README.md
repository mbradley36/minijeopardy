This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### To Do Items

*More research to see if the API has a built in way to pull only the required date range
*updateQuestion in GameBoard should remove the previous question from the list so that the next question can be rendered
*rewrite the sortByPoints function in QuestionsHandler so that it's only going through the array once
*More work on styling
*Set up logging for errors
*Create a user component that keeps track of what question IDs they've seen before.
	*Gameboard can check this list when calling the API so repeat questions are not displayed.
	*Tests to ensure seen questions are being stored and filtered out properly.

Contact [Miranda Huet](mailto:mirandajhuet@gmail.com) with any additional questions.

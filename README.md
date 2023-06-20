# Login App

Responsive Login SPA, with a retrieve password page, developed with React and JavaScript. Some accesibility features (like aria labels) are included in this app.

Notes:

- The app is not connected to a database, so instead of loging in to a different page, it prints the credentials in the console. Same goes for the Retrieve Password page.
- The first attempt at loging in ALWAYS throws an error and displays a warning. After that, it will login (print in console).

## Dependencies

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [React Select](https://react-select.com/)
- [Node.js](https://nodejs.org/)
- [Sass](https://sass-lang.com/)

## Getting started

### Clone repository

Clone the project repository from your terminal:

```
 git clone https://github.com/merybal/login-app.git
```

or directly from GitHub.

### Project setup

```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

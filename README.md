## React initial base [Front-End]

This project is an initial base of a react project, using Saga, Redux, Hooks and Styled Components.

# How to run

$ yarn (or npm install) \
$ yarn start (or npm run start)

# Libraries

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- axios
- prop-types
- react
- react-dom
- react-redux
- react-router-dom
- react-scripts
- redux
- redux-logger
- redux-saga
- reduxsauce
- styled-components
- styled-media-query

# Project Structure

```bash
📦src
┣ 📂**tests**: All tests here (components, presentation, reducers etc)
┣ 📂assets: All assets here (jpg, png, svg etc)
┣ 📂components: All functional components here, without business rules
┃ ┣ 📂core: Components that are used in multiple places of the application
┃ ┗ 📂presentation: Presentations that are used by Containers components
┣ 📂containers: Containers components (responsible for handling business rules for presentations)
┣ 📂helpers: Application helpers like sanitize, format strings and params, array methods etc.
┣ 📂routes: Routes Privates and Publics configurations
┣ 📂services: Axios API services
┣ 📂store: Redux store configurations
┃ ┣ 📂ducks: All reducers
┃ ┣ 📂sagas: All redux-sagas
┣ 📂utils: Constants, mocks, schemas, masks and auth
┃ ┣ 📂constants: Constants all texts and dictionaries that cannot be put into locales folder
┣ 📂globalStyle: Global style
┃ ┣ 📂globalStyle: CSS resets, vars and global styles (All css variables here inside :root)
┗ 📜index.js:
┗ 📜App.js:
```

# Author

Raiane Christine - raianechristine@outlook.com

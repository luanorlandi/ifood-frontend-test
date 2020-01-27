# Spotifood

Project developed for [ifood-frontend-test](https://github.com/ifood/ifood-frontend-test). Use the following commands to run this project:

```
npm i
npm start
```

## Architecture, libs and details about the project

I choose [React](https://reactjs.org/) as suggested and bootstrapped with [create-react-app](https://github.com/facebook/create-react-app) for a quick setup over a manual configuration of [webpack](https://webpack.js.org/).

The state management is using React states itself with components (when it's a local) and [Context API](https://reactjs.org/docs/context.html) (for global states).

I choose Context over [Redux](https://redux.js.org/) mostly for the following reasons:

- The setup and reduced amount code in the project makes it more simple to use
- More states can be added in `src/contexts/` like a store, but they can be separated in different providers
- The app doesn't need state middlewares or [redux-form](https://redux-form.com/)

Featured libs I used:

- [Bulma](https://bulma.io/): nice CSS framework, I find it more simple than Bootstrap, even though the class names are more verbose.

- [SASS](https://sass-lang.com/guide) and [BEM](http://getbem.com/introduction/): a scalable way to structure the CSS

- [formik](https://github.com/jaredpalmer/formik): awesome lib to build forms, it helps a lot to handle events and values, so less code and more readable components

- [react-toastify](https://github.com/fkhadra/react-toastify): toasts that use React Portal, so it makes more easy and simple to display errors throughout the app

- [eslint](https://eslint.org/): I think it's important in any front-end project for maintainability purposes and code style, it also helped the accessibility development with some rules of [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

- [react-resting-library](https://testing-library.com/): an alternative to [Enzyme](https://github.com/airbnb/enzyme), I choose to give it a try and because it comes with create-react-app. The experience was like testing with [Cypress](https://www.cypress.io/), everything guiding the developer to test by thinking in the user interaction, instead of providing a lot of ways and tools. I created some tests for the main functions of the app, but in more time I would increase the test coverage

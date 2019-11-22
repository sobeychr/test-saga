# Test Saga

## Basics

### Description

_incomplete project_

Test project exploring [Redux-Saga](https://redux-saga.js.org/) and [Yarn](https://yarnpkg.com/lang/en/). It uses basics of [Redux-Store](https://redux.js.org/basics/store) for simple navigation and interaction.

### Components

- Babel
- Jest
- Lint
- React
- Redux
- SASS
- Webpack
- Yarn

### Installation/Usage

- **Install** `yarn`
- **Dev** `yarn dev` should open [localhost:3000](http://localhost:3000/) with the basic app. _Dev_ has hot reload.
- **Publish** _incomplete_
- **Test code** `yarn code` runs [Prettier](https://prettier.io/), [Eslint](https://eslint.org/) and [Test](https://jestjs.io/)
- **Testing**
  - `yarn test` is the default command to run Jest
  - `yarn testCi` runs Jest and collects coverage
  - `yarn testWatch` runs Jest and watches files

## Development

### Guidelines

- App loads the Router. Router opens the appropriate Page. Page outputs the necessary components.
- Styles are located in `src/scss/`
- Redux store is located in `src/redux`
- Aliases are configured within Webpack `config/webpack.js` **_> resolve.alias_**
- Hooks are added on _pre-commit_ and on _pre-push_ to enforce valid commits

### Standards

- React files use _jsx_ file extension
- Styles are located in `src/scss/` directory.
- Styles standards follow [Material IO](https://material.io/)
- Run `yarn code` on a regular basis to proof-read your code

### Quick commands

- `yarn newPage {page}` quickly adds defaults files for a new web page. Remember to edit _src/Router.jsx_
- `yarn newStore {store}` quickly adds default files for a new store. Remember to edit _src/store/reducer/index.jsx_
- `yarn removePage {page}` and `yarn removeStore {store}` allow to quickly remove files

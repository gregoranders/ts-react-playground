# ts-react-playground - [TypeScript](http://www.typescriptlang.org/) [React](https://reactjs.org/) Playground

#### [Storybook](https://gregoranders.github.io/ts-react-playground-docs)

[![Dependency Status][daviddm-image]][daviddm-url]
[![License][license-image]][license-url]
[![Issues][issues-image]][issues-url]
[![Code maintainability][code-maintainability-image]][code-maintainability-url] [![Code issues][code-issues-image]][code-issues-url] [![Code Technical Debt][code-tech-debt-image]][code-tech-debt-url]

[![Main Language][language-image]][code-metric-url] [![Languages][languages-image]][code-metric-url] [![Code Size][code-size-image]][code-metric-url] [![Repo-Size][repo-size-image]][code-metric-url]

## Features

- TypeScript
- React + React-Router + Recoil
- SCSS
- ServiceWorker with PWA
- Jest Snapshot/Unit Tests with Code Coverage (enzyme)
- Jest + Puppeteer (screenshots from submodule) E2E Tests
- Storybook (publish via CI into submodule)
- ESM (development or build)
- Webpack (development or build)
- Rollup for Vendor as ESM
- GitHub CI Integration (feature, development, master, release)
- Circle CI Integration
- Code Quality via Code Climate
- Docker Container (nginx with ssl)

| GitHub                                                           | Travis                                                       | CircleCI                                                         | AppVeyor                                                         | Coveralls                                                                  |                                                                              |
| ---------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [![ReleaseMaster Build][release-build-image]][release-url]       |                                                              |                                                                  |                                                                  |                                                                            | [![Release][release-image]][release-url]                                     |
| [![Master Build][master-build-image]][master-url]                | [![Master Build][travis-master-image]][travis-url]           | [![Master Build][circleci-master-image]][circleci-url]           | [![Master Build][appveyor-master-image]][appveyor-url]           | [![Master Coverage][master-coveralls-image]][master-coveralls-url]         | [![Master Version][master-version-image]][master-version-url]                |
| [![Development Build][development-build-image]][development-url] | [![Development Build][travis-development-image]][travis-url] | [![Development Build][circleci-development-image]][circleci-url] | [![Development Build][appveyor-development-image]][appveyor-url] | [![Test Coverage][development-coveralls-image]][development-coveralls-url] | [![Development Version][development-version-image]][development-version-url] |

### Clone repository

```
git clone https://github.com/gregoranders/ts-react-playground
```

### Install dependencies

```
npm install
```

### Build

#### Webpack

```
npm run build:webpack
```

#### ESM

```
npm run build:esm
```

### Testing

#### Test using [Jest](https://jestjs.io/)

```
npm test
```

#### E2E Test using [Jest](https://jestjs.io/) and [Puppeteer](https://pptr.dev/)

```
npm run e2e
```

### Development

#### Webpack

```
npm start
```

#### ESM

```
npm run watch-script
npm run watch-scss
npm run watch-livereload
```

#### Code Climate Checks [docker required](docs/CODECLIMATE.md)

```
npm run codeclimate
```

### Storybook

```
npm run storybook
```

### Clear

```
npm run clear
```

[release-url]: https://github.com/gregoranders/ts-react-playground/releases
[master-url]: https://github.com/gregoranders/ts-react-playground/tree/master
[development-url]: https://github.com/gregoranders/ts-react-playground/tree/development
[repository-url]: https://github.com/gregoranders/ts-react-playground
[code-metric-url]: https://github.com/gregoranders/ts-react-playground/search?l=TypeScript
[travis-url]: https://travis-ci.org/gregoranders/ts-react-playground
[travis-image]: https://travis-ci.org/gregoranders/ts-react-playground.svg?branch=master
[daviddm-url]: https://david-dm.org/gregoranders/ts-react-playground
[daviddm-image]: https://david-dm.org/gregoranders/ts-react-playground.svg?branch=master
[license-url]: https://github.com/gregoranders/ts-react-playground/blob/master/LICENSE
[license-image]: https://img.shields.io/github/license/gregoranders/ts-react-playground.svg
[master-version-url]: https://github.com/gregoranders/ts-react-playground/blob/master/package.json
[master-version-image]: https://img.shields.io/github/package-json/v/gregoranders/ts-react-playground/master
[development-version-url]: https://github.com/gregoranders/ts-react-playground/blob/development/package.json
[development-version-image]: https://img.shields.io/github/package-json/v/gregoranders/ts-react-playground/development
[issues-url]: https://github.com/gregoranders/ts-react-playground/issues
[issues-image]: https://img.shields.io/github/issues-raw/gregoranders/ts-react-playground.svg
[release-image]: https://img.shields.io/github/release/gregoranders/ts-react-playground
[release-build-image]: https://github.com/gregoranders/ts-react-playground/workflows/Release%20CI/badge.svg
[master-build-image]: https://github.com/gregoranders/ts-react-playground/workflows/Master%20CI/badge.svg
[development-build-image]: https://github.com/gregoranders/ts-react-playground/workflows/Development%20CI/badge.svg
[master-coveralls-url]: https://coveralls.io/github/gregoranders/ts-react-playground?branch=master
[master-coveralls-image]: https://img.shields.io/coveralls/github/gregoranders/ts-react-playground/master
[development-coveralls-image]: https://img.shields.io/coveralls/github/gregoranders/ts-react-playground/development
[development-coveralls-url]: https://coveralls.io/github/gregoranders/ts-react-playground?branch=development
[code-maintainability-url]: https://codeclimate.com/github/gregoranders/ts-react-playground/maintainability
[code-maintainability-image]: https://img.shields.io/codeclimate/maintainability/gregoranders/ts-react-playground
[code-issues-url]: https://codeclimate.com/github/gregoranders/ts-react-playground/maintainability
[code-issues-image]: https://img.shields.io/codeclimate/issues/gregoranders/ts-react-playground
[code-tech-debt-url]: https://codeclimate.com/github/gregoranders/ts-react-playground/maintainability
[code-tech-debt-image]: https://img.shields.io/codeclimate/tech-debt/gregoranders/ts-react-playground
[language-image]: https://img.shields.io/github/languages/top/gregoranders/ts-react-playground
[languages-image]: https://img.shields.io/github/languages/count/gregoranders/ts-react-playground
[code-size-image]: https://img.shields.io/github/languages/code-size/gregoranders/ts-react-playground
[repo-size-image]: https://img.shields.io/github/repo-size/gregoranders/ts-react-playground
[travis-url]: https://travis-ci.org/gregoranders/ts-react-playground
[travis-master-image]: https://travis-ci.org/gregoranders/ts-react-playground.svg?branch=master
[travis-development-image]: https://travis-ci.org/gregoranders/ts-react-playground.svg?branch=development
[circleci-url]: https://app.circleci.com/pipelines/github/gregoranders/ts-react-playground
[circleci-master-image]: https://img.shields.io/circleci/build/github/gregoranders/ts-react-playground/master
[circleci-development-image]: https://img.shields.io/circleci/build/github/gregoranders/ts-react-playground/development
[appveyor-url]: https://ci.appveyor.com/project/gregoranders/ts-react-playground
[appveyor-master-image]: https://img.shields.io/appveyor/build/gregoranders/ts-react-playground/master
[appveyor-development-image]: https://img.shields.io/appveyor/build/gregoranders/ts-react-playground/development

# Contributing

So you want to contribute, nice.  **Thank you**.

Bug reports and code and documentation patches are all welcome. You can help this project also by using the development version and by reporting any bugs you might encounter.

You may contribute in several ways like:

- Writing Tests
- Creating new features
- Fixing bugs
- Improving documentation and examples
- Translating any document here to your language

## Table of contents

- [Contributing](#contributing)
  - [Developing](#developing)
  - [Running tests](#running-tests)
  - [Reporting a bug](#reporting-a-bug)
  - [Request a feature](#request-a-feature)
  - [Commit message](#commit-message)
  - [Code style](#code-style)

## Developing

There is only one main source file in the project. It is the [/src/index.js](/src/index.js).
The [test/index.spec.js](test/index.spec.js) is for now the only unit test file in the project.

The `dist` includes the minified version of the source code.

## Running tests

Run unit tests using this command:

```bash
npm test
```

## Reporting a bug

Use the [GitHub issue tracker](https://github.com/n2geoff/js-lib/issues) to report any bug you find.
Bugs description should include:

- How to reproduce the bug;
- Easy to understand title;

Would be nice to have some code showing how to reproduce the code, you may use [gist](https://gist.github.com) or [Codepen](https://codepen.io) for uploading your example code.

## Request a feature

Use the [GitHub issue tracker](https://github.com/n2geoff/js-lib/issues) to request a new feature.

Keep in mind, this is a pure javascript library

Feel free to port it to your favorite framework, such as [RiotJS](http://riotjs.com), Angular or VueJs in a new repository.

## Commit message

Commit messages should includes GitHub number reference and a imperative easy to understand sentence.

## Coding style

If it is supported in all major browers without transpiling, then please use those JavaScript language features in your code, with one caveat -- readablity is king. 

Currently all ES5 and ES6/ES2015 are available.

This project is linted agaist [JSHint](https://github.com/jshint/jshint) and the [`.jshintrc`](.jshintrc) is dead-simple, and all you need to followed. 

Thank you for reading this.


Hey, **star** this *repo* and/or share it with your friends.
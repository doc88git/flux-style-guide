# FLUX STYLE GUIDE - Contribution guide

Hello! We are really excited that you are interested in contributing to the Flux Style Guide. Before submitting your contribution, take a moment and read the following guidelines:

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Guidelines for new issues](#guidelines-for-new-issues)
- [Guide to Pull Request](#guide-to-pull-request)
- [Development settings](#development-settings)
- [Project Structure](#project-structure)

## New Issues Guidelines

- Always use the issue templates to create new issues (feature and bugs).

## Guide to Pull Request

- The `master` branch is just a snapshot of the latest stable release. All developments must be done in dedicated branches. ** Do not send PRs to the `master` branch. **

- Check out a relevant topic branch, eg `dev`, and merge back to the same branch.

- Make sure that all npm tests have passed. (see [Development settings] (# development-settings))

- Ideally, before development, open an issue of functionality suggestion, improvement or correction.

- Add appropriate test coverage, if applicable


## Development settings

- [Node.js](http://nodejs.org) **(version 8 or higher)**
- [Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (running Selenium server during e2e tests).

After cloning the repo, run:

``` bash
$ yarn # install the dependencies of the project
```

### Committing Changes

Commit messages must follow the [Git Commit Message Convention](./ COMMIT_CONVENTION.md) so that change records can be generated automatically. Commit messages will be automatically validated after the commit.

### Commonly used NPM scripts

``` bash
# watch and auto re-build
$ npm run dev

# watch and auto re-build in Storybook
$ npm run storybook

# build Eyes Storybook snapshot
$ npm run eyes

# watch and auto re-run unit tests
$ test: watch

# run the full test suite, including linting / type checking
$ npm test
```

Other scripts are available in the `scripts` section of the `package.json` file.

The standard test script will do the following: lint with ESLint -> type check with Flow -> unit tests with coverage -> e2e tests. **Make sure that this approval passes successfully before submitting a PR.** Although the same tests are run on your CI server, it is best to make it work locally.

## Project Structure

- ** `public` **: TODO - add description
- ** `src` **: TODO - add description
  - ** `assets` **: TODO - add description
    - ** `fonts` **: TODO - add description
    - ** `images` **: TODO - add description
    - ** `settings` **: TODO - add description
  - ** `components` **: TODO - add description
  - ** `directives` **: TODO - add description
  - ** `locales` **: TODO - add description
  - ** `mixins` **: TODO - add description
  - ** `mocks` **: TODO - add description
  - ** `plugins` **: TODO - add description
  - ** `utils` **: TODO - add description

## Credits

Frontend development team [Doc88](https://doc88.com.br)!

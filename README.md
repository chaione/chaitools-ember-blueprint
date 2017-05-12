# ChaiTools Ember Blueprint
Provides an Ember.js application blueprint for use with `ember new --blueprint` command.

## Prerequisites

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Ember CLI](https://ember-cli.com/)

## Usage
To create a new Ember project using this blueprint, simply run the following command (requires Ember CLI 2.14+):

```shell
$ ember new my-awesome-new-app -b chaitools-ember-blueprint
```

To use the latest blueprint that hasn't been published to NPM, run this (works with older versions of Ember CLI):

```shell
$ ember new my-awesome-new-app -b https://github.com/chaione/chaitools-ember-blueprint.git
```

Your newly created Ember app is ready to go! Launch it by running:

```shell
$ cd my-awesome-new-app
$ ember s
```

Open your browser, navigate to `http://localhost:4200/`, and see your new app in action.

#### Other Useful Commands

- `ember t` - Run all tests.
- `ember t -s` - Run all tests with live reload.
- `ember release --tag '0.0.1' --annotation 'My first release!'` - Create a new version.
- `ember deploy qa` - Deploy a build to QA environment.

## Installed Addons

In addition to addons installed by the Ember CLI blueprint, this one also installs the following addons that are useful to most of our projects:

#### Authentication & Authorization
- [`ember-simple-auth`](https://github.com/simplabs/ember-simple-auth) - A lightweight authentication/authorization library.

#### Testing
- [`ember-cli-mocha`](https://github.com/ember-cli/ember-cli-mocha) - Replaces default QUnit testing framework with Mocha/Chai.
  - [`ember-cli-chai`](https://github.com/ember-cli/ember-cli-chai) - A BDD/TDD assertion library. Required by `ember-cli-mocha`.
- [`ember-cli-page-object`](https://github.com/san650/ember-cli-page-object/) - Eases construction of page objects for acceptance/integration tests.
- [`ember-native-dom-helpers`](https://github.com/cibernox/ember-native-dom-helpers) - Test helpers that fire native event instead of jQuery events.
- [`ember-cli-mirage`](https://github.com/samselikoff/ember-cli-mirage) - A client-side mock server to develop, test and prototype your application.

#### CSS
- [`ember-cli-sass`](https://github.com/aexmachina/ember-cli-sass) - Sass support with source maps and include paths.
- [`ember-cli-bootstrap-sassy`](https://github.com/lifegadget/ember-cli-bootstrap-sassy) - Bootstrap support with Sass style.

#### Release & Deployment
- [`ember-cli-release`](https://github.com/lytics/ember-cli-release) - An `ember release` command for bumping app versions and creating/pushing git tags with annotation.
- [`ember-cli-deploy`](https://github.com/ember-cli-deploy/ember-cli-deploy) - A deployment pipeline.
- [`ember-cli-deploy-build`](https://github.com/ember-cli-deploy/ember-cli-deploy-build) - Builds application before deployment.
- [`ember-cli-deploy-revision-data`](https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data) - Generates revision data for each deployment.
- [`ember-cli-deploy-slack`](https://github.com/ember-cli-deploy/ember-cli-deploy-slack) - Sends Slack message for each deployment.

#### Error Reporting
- [`ember-cli-sentry`](https://github.com/damiencaselli/ember-cli-sentry) - Adds Sentry support.

#### Linting
- [`ember-cli-dependency-lint`](https://github.com/salsify/ember-cli-dependency-lint) - Makes sure application has only one version of each dependency.

#### Utils
- [`ember-route-action-helper`](https://github.com/DockYard/ember-route-action-helper) - Bubbles closure actions to routes, to eliminate the need for using controllers.
- [`ember-cli-moment-shim`](https://github.com/jasonmit/ember-cli-moment-shim) - ES6 accessible module for Moment.js.
- [`ember-cli-moment`](https://github.com/stefanpenner/ember-moment) - Template helpers and computed property macros for Moment.js.
- [`ember-cli-dotenv`](https://github.com/fivetanley/ember-cli-dotenv) - Imports environment variables from a `.env` file.

## Other Changes

#### Ember CLI

- Pods file structure is enabled by default. See `.ember-cli`.
- Browser target is set to IE 10+ and latest versions of Chrome, Safari and Firefox. See `config/targets.js`.
- Default deploy targets include DEV, QA, STAGING and PRODUCTION. Please note that deploy targets are not environments in Ember CLI's definition. See `config/environment.js` and `config/deploy.js`.

#### Yarn

This blueprint contains a Yarn lock file which tells Ember CLI to use Yarn instead of NPM.

#### Circle CI

This blueprint replaces default `.travis.yml` with a Circle CI config file `circle.yml`. This config automatically deploys master builds to DEV environment.

#### ESLint

This blueprint provides a fairly strict ESLint rule set. See `.eslintrc.js` and `tests/.eslintrc.js`.

#### Code Climate

This blueprint contains a Code Climate config file `.codeclimate.yml`. JavaScript duplication mass threshold is set to 64.

#### Dependency Lint

Auto-generated dependency lint tests are disabled and you will need to run `ember dependency-lint` manually. This can be turned on in `config/dependency-lint.js`.

## License

This project is licensed under the [MIT License](LICENSE).

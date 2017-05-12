# ChaiTools Ember Blueprint
Provides an Ember.js application blueprint for use with `ember new --blueprint` command.

## Usage
To create a new Ember project using this blueprint, simply run the following command (requires Ember CLI 2.14+):

```
ember new my-awesome-new-app -b chaitools-ember-blueprint
```

To use the latest blueprint that hasn't been published to NPM, run this (works with older versions of Ember CLI):

```
ember new my-awesome-new-app -b https://github.com/chaione/chaitools-ember-blueprint.git
```

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

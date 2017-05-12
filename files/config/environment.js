/* eslint-env node */

const deployTarget = process.env.DEPLOY_TARGET;

module.exports = function (environment) {
  const ENV = {
    modulePrefix: '<%= name %>',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    sentry: {
      dsn: process.env.SENTRY_DSN,
      development: environment !== 'production',
      serviceName: 'logger',
      ravenOptions: {
        environment: deployTarget
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  // Important Notice: Environments are NOT Deploy Targets!
  // http://blog.deveo.com/do-not-confuse-environment-for-deploy-target/
  // DEV/QA/STAGING/PRODUCTION are Deploy Targets, not Environments.
  // All these targets should run a 'production (environment)' build.

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  // Here are the configs for DEV/QA/STAGING/PRODUCTION targets.
  if (deployTarget === 'dev') {
    // Configs for DEV environment
  } else if (deployTarget === 'qa') {
    // Configs for DEV environment
  } else if (deployTarget === 'staging') {
    // Configs for DEV environment
  } else if (deployTarget === 'production') {
    // Configs for DEV environment
  } else {
    // Configs for local environment
  }

  return ENV;
};

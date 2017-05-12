/* jshint node: true */

module.exports = function (deployTarget) {
  const ENV = {
    build: {
      environment: 'production'
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'dev') {
    // configure other plugins for DEV deploy target here
  }

  if (deployTarget === 'qa') {
    // configure other plugins for QA deploy target here
  }

  if (deployTarget === 'staging') {
    // configure other plugins for STAGING deploy target here
  }

  if (deployTarget === 'production') {
    // configure other plugins for PRODUCTION deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};

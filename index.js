const fleck = require('fleck');

const dasherize = fleck.dasherize;
const classify  = fleck.upperCamelize;

module.exports = {
  description: 'Ember.js project created by ChaiTools.',

  locals(options) {
    const entity    = options.entity;
    const rawName   = entity.name;
    const name      = dasherize(rawName);
    const namespace = classify(rawName);

    return {
      name,
      modulePrefix: name,
      namespace,
      emberCLIVersion: '2.13.1'
    }
  }
};
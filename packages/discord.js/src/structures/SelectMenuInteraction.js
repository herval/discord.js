'use strict';

const process = require('node:process');
const StringSelectMenuInteraction = require('./StringSelectMenuInteraction');

let deprecationEmitted = false;

/**
 * @deprecated Use {@link StringSelectMenuInteraction} instead.
 */
class SelectMenuInteraction extends StringSelectMenuInteraction {
  constructor(...params) {
    super(...params);

    if (!deprecationEmitted) {
      process.emitWarning(
        'The SelectMenuInteraction class is deprecated, use StringSelectMenuInteraction instead.',
        'DeprecationWarning',
      );
      deprecationEmitted = true;
    }
  }
}

module.exports = SelectMenuInteraction;

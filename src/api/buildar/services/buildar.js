'use strict';

/**
 * buildar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::buildar.buildar');

'use strict';

/**
 * code-promo service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::code-promo.code-promo');

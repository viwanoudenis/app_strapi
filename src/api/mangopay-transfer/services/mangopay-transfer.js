'use strict';

/**
 * mangopay-transfer service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mangopay-transfer.mangopay-transfer');

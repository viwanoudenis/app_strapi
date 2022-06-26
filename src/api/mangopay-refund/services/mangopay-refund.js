'use strict';

/**
 * mangopay-refund service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mangopay-refund.mangopay-refund');

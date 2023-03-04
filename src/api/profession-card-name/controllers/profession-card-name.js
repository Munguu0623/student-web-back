"use strict";

/**
 * profession-card-name controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::profession-card-name.profession-card-name",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const entity = await strapi.db
        .query("api::profession-card-name.profession-card-name")
        .findOne({ where: { slug } });
      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    },
  })
);

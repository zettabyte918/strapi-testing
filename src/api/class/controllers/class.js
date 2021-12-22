"use strict";

/**
 *  class controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::class.class", ({ strapi }) => ({
  async find(ctx) {
    const { user } = ctx.state;
    // if (user.username == "hosscold") {
    //   return ctx.unauthorized("name is missing");
    // }

    const { data, meta } = await super.find(ctx);
    // some more logic

    return { data, meta };
  },

  async yo(ctx) {
    const { user } = ctx.state;
    const res = await strapi
      .service("api::class.classe")
      .exampleService("welcome@mysite.com");

    const sanitizedEntity = await this.sanitizeOutput(res, ctx); // this for user (model) sanitize

    return sanitizedEntity;
    // return this.transformResponse(sanitizedEntity); this for meta anad data and attribute tag
    // return res;
  },
}));

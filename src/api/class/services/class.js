"use strict";

/**
 * class service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::class.class", ({ strapi }) => ({
  async exampleService(email) {
    let response = strapi.db.query("api::class.class").findMany({
      select: ["name", "uid"],
      where: {
        name: {
          $eq: "tic",
        },
      },
      populate: {
        user: true,
      },
    });

    return response;
  },
}));

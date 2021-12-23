"use strict";
const { getService, query, getController } = require("../utils");

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return query("experts.expert").findMany({
      select: ["name"],
      where: {
        name: {
          $ne: "mm",
        },
      },

      offset: 0, //start from first entry
      limit: 10,
    }); //https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/query-engine/single-operations.html#findone
  },
  async getYolo(ctx) {
    // const roles = strapi.query("plugin::experts.expert").find();
    // return roles;
    return await getController("myController").yolo(ctx);
  },
});

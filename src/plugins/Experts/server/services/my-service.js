"use strict";
const { getService, getController } = require("../utils");

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return strapi.db.query("plugin::experts.expert").findMany({
      select: ["name"],
    }); //https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/query-engine/single-operations.html#findone
  },
  async getYolo(ctx) {
    // const roles = strapi.query("plugin::experts.expert").find();
    // return roles;
    return await getController("myController").yolo(ctx);
  },
});

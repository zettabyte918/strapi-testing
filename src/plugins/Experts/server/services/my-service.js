"use strict";

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return strapi.db.query("plugin::experts.expert").findMany({}); //https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/query-engine/single-operations.html#findone
  },
  getYolo() {
    const roles = strapi.query("plugin::experts.expert").find();
    return roles;
  },
});

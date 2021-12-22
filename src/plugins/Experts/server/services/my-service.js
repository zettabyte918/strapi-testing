"use strict";

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return strapi.db.query("plugin::experts.expert").findOne({
      select: ["name"],
    });
  },
  getYolo() {
    const roles = strapi.query("plugin::experts.expert").find();
    return roles;
  },
});

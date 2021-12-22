"use strict";

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  },
  getYolo() {
    const roles = strapi.query("plugin::experts.expert").find();
    return roles;
  },
});

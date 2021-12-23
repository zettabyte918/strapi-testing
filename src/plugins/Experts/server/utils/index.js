"use strict";

const getService = (name) => {
  return strapi.plugin("experts").service(name);
};

const getController = (name) => {
  return strapi.plugin("experts").controller(name);
};

const query = (plugin) => {
  return strapi.db.query(`plugin::${plugin}`);
};

module.exports = {
  query,
  getService,
  getController,
};

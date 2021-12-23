"use strict";

const getService = (name) => {
  return strapi.plugin("experts").service(name);
};

const getController = (name) => {
  return strapi.plugin("experts").controller(name);
};

module.exports = {
  getService,
  getController,
};

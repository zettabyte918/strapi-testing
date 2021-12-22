"use strict";

module.exports = {
  async index(ctx) {
    ctx.body = await strapi
      .plugin("experts")
      .service("myService")
      .getWelcomeMessage();
  },
  yolo(ctx) {
    ctx.body = strapi.plugin("experts").service("myService").getYolo();
  },
};

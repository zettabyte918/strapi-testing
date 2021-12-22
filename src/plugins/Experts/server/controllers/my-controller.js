"use strict";

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin("experts")
      .service("myService")
      .getWelcomeMessage();
  },
  yolo(ctx) {
    ctx.body = strapi.plugin("experts").service("myService").getYolo();
  },
};

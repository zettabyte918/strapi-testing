"use strict";

const { getService, getController } = require("../utils");

module.exports = {
  async index(ctx) {
    const { value } = ctx.params;
    const store = strapi.store({
      type: "core", // should be 'core' by default
      // environment is the current environment
      name: "custom_store",
    });
    const test = {
      "content-api": {
        type: "content-api",
      },
    };
    await store.set({ key: "v1", value: test });

    const v1 = await store.get({ key: value });
    //await getService("myService").getWelcomeMessage(); //get data from service
    //v1 ? (ctx.body = v1) : ctx.notFound("data is null");

    await getService("myService").getYolo(ctx);
  },
  async yolo(ctx) {
    //ctx.body = strapi.plugin("experts").service("myService").getYolo();
    ctx.body = await getService("myService").getWelcomeMessage();
  },
};

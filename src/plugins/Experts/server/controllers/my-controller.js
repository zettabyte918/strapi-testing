'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('Experts')
      .service('myService')
      .getWelcomeMessage();
  },
};

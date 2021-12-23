module.exports = {
  "content-api": {
    type: "content-api",
    routes: [
      {
        method: "GET",
        path: "/",
        handler: "myController.index",
        config: {
          policies: [],
        },
      },
      {
        method: "GET",
        path: "/set/:value",
        handler: "myController.index",
        config: {
          policies: [],
        },
      },
      {
        method: "GET",
        path: "/yolo",
        handler: "myController.yolo",
        config: {
          policies: [],
        },
      },
    ],
  },
};

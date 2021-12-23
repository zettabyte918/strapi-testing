// path: ./content-types/content-type-a.js

module.exports = {
  info: {
    tableName: "up_experts",
    singularName: "expert", // kebab-case mandatory
    pluralName: "experts", // kebab-case mandatory
    displayName: "Les Experts",
    description: "A regular les experts type",
    kind: "collectionType",
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    "content-manager": {
      visible: true,
    },
    "content-type-builder": {
      visible: true,
    },
  },
  attributes: {
    name: {
      type: "string",
      min: 1,
      max: 50,
      configurable: true,
    },
  },
};

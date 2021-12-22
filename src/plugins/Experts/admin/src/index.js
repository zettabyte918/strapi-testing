import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";

const name = pluginPkg.strapi.name;

const myComponent = async () => {
  const component = await import(
    /* webpackChunkName: "users-providers-settings-page" */ "./pages/App"
  );

  return component;
};

export default {
  register(app) {
    app.createSettingSection(
      {
        id: "expertsSettings",
        intlLabel: {
          id: "experts",
          defaultMessage: "Les Experts",
        },
      },

      [
        {
          intlLabel: {
            id: "expertss",
            defaultMessage: "Add Student",
          },
          id: "ddd",
          to: `/settings/${pluginId}`,
          Component: async () => {
            const component = await import("./pages/add");

            return component;
          },
          permissions: [],
        },
      ]
    );

    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};

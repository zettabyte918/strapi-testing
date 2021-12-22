import AuthLogo from "./extensions/logo.png";

export default {
  config: {
    // Custom added heading title
    headingTitle: {
      title: "LES EXPERTS",
      subTitle: "By Houssem",
    },
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: AuthLogo,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: AuthLogo,
    },
    locales: ["fr"],
    tutorials: false,
    notifications: { release: false },
    theme: {
      colors: {
        alternative100: "#f6ecfc",
        alternative200: "#e0c1f4",
        alternative500: "#ac73e6",
        alternative600: "#9736e8",
        alternative700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
  },
  bootstrap() {},
};

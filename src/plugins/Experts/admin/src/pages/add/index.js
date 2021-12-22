/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import { useIntl } from "react-intl";
import { HeaderLayout } from "@strapi/design-system/Layout";
import { useNotification } from "@strapi/helper-plugin";
import { Button, Main } from "@strapi/design-system";
import { CheckPermissions } from "@strapi/helper-plugin";
import { hasPermissions, useRBACProvider } from "@strapi/helper-plugin";

const HomePage = () => {
  const { formatMessage } = useIntl();
  const getTrad = (id) => `${pluginId}.${id}`;
  const toggleNotification = useNotification();
  const permissions = [
    {
      action: "plugin::content-manager.components.configure-layout",
      subject: null,
    },
  ];

  const handleClick = () => {
    toggleNotification({
      // required
      type: "info",
      // required
      message: {
        id: "notification.version.update.message",
        defaultMessage: "A new version is available",
      },
      // optional
      link: {
        url: "https://github.com/strapi/strapi/releases/tag/v4",
        label: {
          id: "notification.version.update.link",
          defaultMessage: "See more",
        },
      },
      // optional: default = false
      blockTransition: true,
      // optional
      onClose: () => localStorage.setItem("STRAPI_UPDATE_NOTIF", true),
    });
  };
  const { allPermissions } = useRBACProvider();
  console.table(allPermissions);
  return (
    <>
      <HeaderLayout
        id="title"
        title={"Email settings"}
        subtitle={"Test the settings for the email plugin"}
      />

      <CheckPermissions permissions={permissions}>
        <Main>
          <Button onClick={handleClick}>Display notification</Button>
        </Main>
      </CheckPermissions>
    </>
  );
};

export default memo(HomePage);

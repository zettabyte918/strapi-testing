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

const HomePage = () => {
  const { formatMessage } = useIntl();
  const getTrad = (id) => `${pluginId}.${id}`;

  return (
    <>
      <HeaderLayout
        id="title"
        title={"Email settings"}
        subtitle={"Test the settings for the email plugin"}
      />
    </>
  );
};

export default memo(HomePage);

const pluginPermissions = {
  // Roles
  accessRoles: [
    { action: "plugin::experts.roles.create", subject: null },
    { action: "plugin::experts.roles.read", subject: null },
  ],
  createRole: [{ action: "plugin::experts.roles.create", subject: null }],
  deleteRole: [{ action: "plugin::experts.roles.delete", subject: null }],
  readRoles: [{ action: "plugin::experts.roles.read", subject: null }],
  updateRole: [{ action: "plugin::experts.roles.update", subject: null }],

  // AdvancedSettings
  readAdvancedSettings: [
    { action: "plugin::experts.advanced-settings.read", subject: null },
  ],
  updateAdvancedSettings: [
    { action: "plugin::experts.advanced-settings.update", subject: null },
  ],

  // Emails
  readEmailTemplates: [
    { action: "plugin::experts.email-templates.read", subject: null },
  ],
  updateEmailTemplates: [
    { action: "plugin::experts.email-templates.update", subject: null },
  ],

  // Providers
  readProviders: [{ action: "plugin::experts.providers.read", subject: null }],
  updateProviders: [
    { action: "plugin::experts.providers.update", subject: null },
  ],
};

export default pluginPermissions;

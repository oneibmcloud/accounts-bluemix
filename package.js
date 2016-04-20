Package.describe({
  name: 'ibmcloud:accounts-bluemix',
  summary: "Login service for Bluemix accounts",
  version: "1.0.3",
  git: 'https://github.com/oneibmcloud/accounts-bluemix.git'
});

Package.onUse(function(api) {
  api.use('accounts-base@1.0.0', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.0.0', ['client', 'server']);
  api.use('ibmcloud:bluemix@1.0.3', ['client', 'server']);

  api.addFiles('bluemix_login_button.css', 'client');
  api.addFiles("bluemix.js");
});

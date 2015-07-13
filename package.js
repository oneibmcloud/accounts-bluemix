Package.describe({
  name: 'ibmcloud:accounts-bluemix',
  summary: "Login service for Bluemix accounts",
  version: "1.0.0",
  git: 'https://github.com/oneibmcloud/accounts-bluemix.git'
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('bluemix', ['client', 'server']);

  api.addFiles('bluemix_login_button.css', 'client');
  api.addFiles("bluemix.js");
});

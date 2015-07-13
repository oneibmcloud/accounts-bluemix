Package.describe({
  summary: "Login service for Bluemix accounts",
  version: "1.0.0"
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('bluemix', ['client', 'server']);

  api.addFiles('bluemix_login_button.css', 'client');
  api.addFiles("bluemix.js");
});

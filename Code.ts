// APA Library

function logHelloWorld() {
  Logger.log("Hello World! I'm alive!");
}

function addAPAMenu(title="Default Title") {
  var menu = SpreadsheetApp.getUi().createAddonMenu(title);
  menu.addToUi();
  return menu;
}

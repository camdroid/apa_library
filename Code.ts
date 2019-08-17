// APA Library

function logHelloWorld() {
  Logger.log("Hello World! I'm alive!");
}

function addAPAMenu(title="Default Title") {
  var menu = SpreadsheetApp.getUi().createAddonMenu(title);
  menu.addToUi();
  return menu;
}

function onOpen(e) {
  var menu = SpreadsheetApp.getUi().createAddOnMenu("Testing this menu");
  menu.addItem('Menu Test', 'testMethod');
  menu.addToUi();
}

function testMethod() {
  SpreadsheetApp.getUi().alert('It worked!');
}

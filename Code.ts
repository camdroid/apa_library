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

function parseSpreadsheetData(data, headers) {
  // TODO: Probably makes more sense to do this without the headers,
  // or with `parseHeaders: bool`
  if (headers == null || data == null || headers.length !== data.length) {
    log("Header length doesn't match data length", true);
  }
  parsedData = {};
  for (var i=0; i<headers.length; i++) {
     parsedData[headers[i]] = data[i];
  }
  return parsedData;

}

const today = () => Utilities.formatDate(new Date(), "CDT", "YYYY-MM-dd");

function moveFileToFolder(file_id, folder_id): null {
  folder = DriveApp.getFolderById(folder_id);
  baseDocFile = DriveApp.getFileById(file_id);

  folder.addFile(baseDocFile);
  DriveApp.getRootFolder().removeFile(baseDocFile);
}

function log(data, debug) {
  if (debug == null) {
    debug = true;
  }
  if (debug) {
    Logger.log(data);
  }
}

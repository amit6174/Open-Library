// Author : Amit6174
// This code is for taking the data entered in donor page, and placing it inside the google sheet
// Copy and paste this file with same name, you need to make some changes here
// NOTE : Please enter the url of YOUR catalogue sheet where the changes are going to appear, in the mentioned "enter url" ...  (eg: "https://docs.google.com/spreadsheets/d/1X-9bI-0_gU/edit#gid=0)

function doGet(e) {
  
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("donor");

}

function userClicked(bookInfo){
  var url = "enter url";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("List of Books");

  ws.appendRow([bookInfo.bookName,bookInfo.author,bookInfo.language,bookInfo.donor, new Date()]);

  // Auto-Sort by Book Names in ascending order -> Heavy on Time for ~10000 entries ??? -> nope
  const range = ws.getRange(3,1,ws.getLastRow()-2,5); // Check the appropriate row number for sorting
  range.sort({column: 1, ascending: true});

}

function doGet(e) {
  
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("rating");

}

function userClicked(rateObj){
  var url = "enter url of your sheet where you want the stats visible";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Stats");

  //ws.appendRow([rateObj.rate, new Date()]);
  var starCell = rateObj.cell;
  var currCellValue = ws.getRange(starCell).getValue();
  currCellValue = currCellValue + 1;
  ws.getRange(starCell).setValue(currCellValue);

  //Logger.log(name + " Clicked the Button");
}

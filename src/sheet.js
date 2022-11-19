const SHEET = {
  member: {
    name:'member',
    row: {
      data: 3,
    },
    column: {
      id: 1,
    },
  },
};

function getSheet(sheetName, spreadSheetId){
  const ss = (spreadSheetId !== undefined) ? SpreadsheetApp.openById(spreadSheetId) : SpreadsheetApp.getActive();
  return ss.getSheetByName(sheetName);
}

function refreshSheet(sheetName, outList, startColumn, startRow, spreadSheetId){
  
  if(!outList[0].length) return;
  const sheet = getSheet(sheetName, spreadSheetId);

  startRow = startRow ? startRow : 2;
  startColumn = startColumn ? startColumn : 1;
  sheet.getRange(startRow, startColumn, sheet.getLastRow(), outList[0].length).clear();
  sheet.getRange(startRow, startColumn, outList.length, outList[0].length).setValues(outList);
}
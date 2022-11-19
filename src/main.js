const TOKEN = 'XXXXXX';
const URL_API = 'https://XXXXX.bundle.jp/api/v1';

function main(){
  const memberList = getMemberList();

  refreshSheet(
    SHEET.member.name,
    memberList.map(member => member.getOutList()),
    SHEET.member.column.id,
    SHEET.member.row.data
  );
}
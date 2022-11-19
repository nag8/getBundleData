function main(){
  const memberList = getMemberList();

  refreshSheet(
    SHEET.member.name,
    memberList.map(member => member.getOutList()),
    SHEET.member.column.id,
    SHEET.member.row.data
  );
}
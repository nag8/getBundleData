const TOKEN = 'XXXXXX';
const URL_API = 'https://XXXXX.bundle.jp/api/v1';

function getMemberList(){

  let memberList = [];
  let cursor = '';

  do{
    const query = `
{
  team {
    members(first:100, after:"${cursor}") {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        databaseId
        fullName
        url
        memberEmployment {
          employmentType{
            name
          }
        }
        memberEnrollment {
          status
          enteredAt
          resignedAt
        }
        memberDivisions{
          division{
            fullName
          }
        }
      }
    }
  }
}
    `;
  
    const options = {
      'method': 'POST',
      'payload': JSON.stringify({query: query}),
      'headers': {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${TOKEN}`,
      },
    };

    const res = UrlFetchApp.fetch(URL_API, options);
    const json = JSON.parse(res).data.team;

    memberList = memberList.concat(json.members.nodes.map(json => new Member(json)));
    cursor = json.members.pageInfo.endCursor;
    Utilities.sleep(1 * 1000);
  }while(json.members.pageInfo.hasNextPage);
  
  return memberList;
}
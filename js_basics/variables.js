const accountId = 12354;
let accountEmail = "surajkedar658@gmail.com"
var accountPassword = "234632";
accountCity = "Amravati"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
/**
 * prefer not to use var
 * because of issue in block scope and functional scope
 */

accountEmail = 'surajkedar';
console.log(accountEmail);


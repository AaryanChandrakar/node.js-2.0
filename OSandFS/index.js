const fs = require(`fs`);
const os = require(`os`);

var user = os.userInfo();
console.log(user.username+` ||by line 4`);

fs.appendFile(`greeting.txt`, "\nhii " + user.username + " !", ()=>{
    console.log(`Done`+` ||by line 8`);
});

// console.log(os);
// console.log(fs);
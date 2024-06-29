const notes = require(`./notes.js`);
console.log(notes);
//----------------------------------------
var myAge = notes.age;
console.log(myAge + ` || by line 5`);
//----------------------------------------
var addition = notes.addNum(myAge, 2);
console.log(addition + ` || by line 8`);
//----------------------------------------
var addition2 = notes.addNum(notes.age, 3)
console.log(addition2 + ` || by line 11`);



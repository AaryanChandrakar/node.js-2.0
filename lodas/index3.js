var _ = require('lodash');

var arr = [`aaryan`, `subham`, `nitin`, `aaryan`, 2, 4, 2, 6, 4, 4, 7]

var uni = _.uniq(arr);
console.log(uni);

console.log(_.isString(`Aaryan`));
console.log(_.isNumber(7));
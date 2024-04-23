// CommonJS - every file is module (by default)
// Node Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-export");

sayHi(names.john);
sayHi(names.peter);
console.log(data);

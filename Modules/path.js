const path = require('path');

console.log(path.dirname("./Modules/os_modules.js"));
console.log(path.extname("./Modules/os_modules.js"));
console.log(path.basename("./Modules/os_modules.js"));

const myPath = path.parse("./Modules/os_modules.js");
console.log(myPath.name);
//-----[OS MODULE]------------------------------------------------------

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

// RECALL: TEMPLATE LITERALS ELIMINATE THE NEED FOR CONCATENATION




//------------------------------------------------------------------------



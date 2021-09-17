//-----[OS MODULE]------------------------------------------------------

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

// RECALL: TEMPLATE LITERALS ELIMINATE THE NEED FOR CONCATENATION



//-----[HTTP MODULE]-------------------------------------------------------------------

// LOADING THE HTTP MODULE
const http = require("http");

// CREATE A SERVER
const server = http.createServer();

// ADD AN EVENT FOR WHEN THE CONNECTION IS MADE
server.on("connection", (socket) => {
    console.log("New connection...");
});

// ADD AN EVENT LISTENER ON PORT 3000
server.listen(3000);

// PRINT THAT THE SERVER IS LISTENING
console.log("Listening on Port 3000...");

// Based on the method used, response is what the server is instructed to do while request is related to what the client asks the server to do.
// NOTE: A SERVER CAN BE CREATED TO LISTEN FOR HTTP REQUESTS


//-----[EXPORTING A MODULE]---------------------------------------------------------------------------------------------------------

module.exports.variable = "variableName"

module.exports.function = "functionName"


//-----[MODULE WRAPPER FUNCTION]-------------------------------------------------------------------------------------------------------

// NODE USES THIS FUNCTION AT RUNTIME 
(exports, require, module, __filename, __dirname) => {
    
}


//-----[BUILT-IN PATH MODULE]-----------------------------------------------------------------------------------------------------------

// LOADING IN THE PATH MODULE
const path = require("path");

// CREATING A CONSTANT TO STORE THE PARSED FORMAT OF THE FILENAME
var pathObj = path.parse(__filename);

// NOTE: PARSE IS A PATH METHOD 

// PRINTING THE CREATED PATH OBJECT
console.log(pathObj)


//-----[FILE SYSTEM MODULE]--------------------------------------------------------------------------------------------------------------

const fs = require("fs");

fs.readdir("./", (err,files) => {
    if(err) {console.log("Error", err)}
    else {console.log("Result", files)}
})


//-----[EVENTS MODULE-------------------------------------------------------------------------------------------------------------------------------------





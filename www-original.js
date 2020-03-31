/* eslint-env node */

var express = require("express");
var app = express();
var http = require("http");
var port = "3118";
//Open in browser and execute below
const opn = require("opn");

//start compression
var compression = require("compression");
app.use(compression());

//Static page path
app.use(express.static("./build"));
app.set("port", port);

//start server
var server = http.createServer(app);
server.listen(port);

server.on("listening", onListening);

function onListening() {
	console.log(`server port 3118 listening and open browser with http://localhost:${port}` );
	opn(`http://localhost:${port}`,"chrome");
}




app.listen(3100, function() {
	console.log(`server port 3100 listening and open browser with http://localhost:${port}`);
	opn(`http://localhost:${port}`,"chrome");
});
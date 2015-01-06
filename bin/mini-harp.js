#!/usr/bin/env node
var createMiniHarp = require ('../');
var parseArgs = require('minimist');
var args = parseArgs(process.argv.slice(2));
var port = 4000;
if (args.port){
	port = args.port;
}
var app = createMiniHarp();
console.log("Starting a http server on port "+port);
app.listen(port);
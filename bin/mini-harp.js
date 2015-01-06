#!/usr/bin/env node
var createMiniHarp = require ('../');
var parseArgs = require('minimist');
var serveStatic = require('serve-static');
var args = parseArgs(process.argv.slice(2));
var port = 4000;
if (args.port){
	port = args.port;
}
var root = process.cwd();
if (args._[0]){
	root = args._[0];
}
var app = createMiniHarp();
console.log("Starting a http server on port "+port);
app.use(function (req,res,next){
	if(req.url == "/current-time"){
		res.end((new Date()).toISOString()+"\n");
	}else{
		next();
	}

})
app.use(serveStatic(root));
app.listen(port);
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
app.use(function (req,res,next){
	if(req.url == "/current-time"){
		res.end((new Date()).toISOString()+"\n");
	}else{
		next();
	}

})
app.listen(port);
module.exports = harp;
var connect = require ('connect');
var makeJade = require ('./lib/processor/jade.js')
var serveStatic = require('serve-static');
function harp(root){
	return connect()
				.use(serveStatic(root))
				.use(makeJade(root));

}
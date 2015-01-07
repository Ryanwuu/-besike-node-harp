module.exports = harp;
var connect = require ('connect');
var serveStatic = require('serve-static');
var makeJade = require ('./lib/processor/jade.js');
var makeLess =  require('./lib/processor/less.js');
var entry = require ('./lib/processor/entry.js');

function harp(root){
	return connect()
				.use(entry)
				.use(serveStatic(root))
				.use(makeJade(root))
				.use(makeLess(root));
}
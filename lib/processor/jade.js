module.exports = makeJade;
var jade = require ('jade');
var path = require ('path');
var fs= require('fs');

function makeJade (root){
	return function (req, res, next){
		if (path.extname(req.url) == '.html'){
			var jadefile = root+'/'+path.basename(req.url,'.html')+'.jade';
			fs.readFile(jadefile,{encoding:'utf8'},function(err,data){
				if(err){
					next();
				}else{
					res.writeHead(200, {
    				'Content-Length': jade.render(data).length, 
    				'Content-Type': 'text/html; charset=UTF-8'
					});
					res.end(jade.render(data));
				}
			});
		}else{
			next();
		}
	}
}
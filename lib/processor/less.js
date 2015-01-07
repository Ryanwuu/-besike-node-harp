module.exports = makeLess;
var less = require ('less');
var path = require ('path');
var fs = require ('fs');

function makeLess(root){
	return function (req, res, next){
		if (path.extname(req.url) == '.css'){
			var lessfile = root+'/'+path.basename(req.url,'.css')+'.less';
			fs.readFile(lessfile, {encoding:'utf8'}, function(err,data){
				if(err){
					next();
				}else{
					less.render(data, function(error, output){
						if(err){
							next();
						}else{
							res.writeHead(200, {
    						'Content-Length': output.length,  
							});
							res.end(output);
						}
					});
				}
			});
		}else{
			next();
		}
	}
}
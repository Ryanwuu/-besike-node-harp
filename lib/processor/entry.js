module.exports = entry;
var path = require('path');
function entry(req,res,next){
	if(path.extname(req.url) == '.jade'||path.extname(req.url) == '.less'){
		res.statusCode = 404;
		res.end('error 404');
	}else if (req.url == '/'){
		req.url = '/index.html';
		next();
	}else{
		next();
	}
}

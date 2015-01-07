module.exports = entry;
function entry(req,res,next){
	if (req.url == '/'){
		req.url = '/index.html';
		next();
	}else{
		next();
	}
}



const logRequest = (req,res,next)=>{
    console.log('Request ke API dari', req.path);
    next();
}

module.exports = logRequest;
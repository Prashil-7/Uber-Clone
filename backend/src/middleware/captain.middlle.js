const Blacklist = require('../model/blacklist.model.js')
const captainModel = require('../model/captain.model')
const jwt = require('jsonwebtoken');


module.exports.captainAuth = async (req, res,next)=>{
    const  token = req.cookies.token || req.headers.authorization?.token.split(' ')[1];

    if(!token){
        return res.status(401).json({msg:'Unauthorized token'})
    }
    const isBlacklisted =await Blacklist.findOne({token :token});
    if(isBlacklisted){
        return res.status(401).json({msg:"Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token ,process.env.JWT_CAPTAIN_SECRET);
        const captain =await captainModel.findById(decoded._id);

        req.captain = captain
        return        next();
    } catch (error) {
        console.log(`the err in jwt verifying token ${error}`);
        return res.status(401).json({msg:"Unauthorized User"})
    }
}
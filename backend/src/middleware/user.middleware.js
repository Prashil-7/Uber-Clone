const userModel =require('../model/user.model')
const jwt = require('jsonwebtoken')
const {Blacklist} = require('../model/blacklist.model')


module.exports.authUser = async (req,res, next)=>{
const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

if(!token){ return res.status(401).json({msg:"Unauthorized User"})}

    const isBlacklisted = await Blacklist.findOne({token:token});
    
    if(isBlacklisted){
        return res.status(401).json({msg:"Unauthorized"});
    }

    try {

        const decoded =   jwt.verify(token ,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)
        req.user =user;

       return  next();


    } catch (error) {
        console.log(`the err in jwt verifying token ${error}`);
        return res.status(401).json({msg:"Unauthorized User"})
        
    }


}


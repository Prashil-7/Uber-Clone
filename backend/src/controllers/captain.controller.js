const captainModel = require('../model/captain.model');
const { validationResult } = require('express-validator');
const captainService = require('../services/captain.serevice');
const Blacklist = require('../model/blacklist.model');



module.exports.registerCaptain = async (req, res, next) => {
    const  err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).json({err : err.array()});
    } 

    const {fullname , email , password , vehicle} = req.body;

    try {
        const hashedPassword = await captainModel.hashPassword(password);

        const captainExits = await captainModel.findOne({email});

        if(captainExits){
           return res.status(401).json({msg:"you are already registered go to login"})
        }
    

        const  captain  = await captainService.createCaptain({
           
            firstname : fullname.firstname, 
            lastname:fullname.lastname,            
            email,
            password: hashedPassword,
            color:vehicle.color,
            plate:vehicle.plate,
            capacity:vehicle.capacity,
            vehicleType:vehicle.vehicleType
        })

        const token = captain.generateAuthToken();
        
        
         return res.status(201).json({token ,captain,
            message:"captain register Successfully"
         });
    } catch (error) {
        console.log(`the err in captain register ${error}`);
         return res.status(401).json({msg:"u are not registered"})
        
    }

}


module.exports.loginCaptain = async (req, res, next) => {
    const  err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).json({err : err.array()});
    } 

    const {email,password}= req.body;

    try {
        
        const captain = await captainModel.findOne({email}).select('+password');

        if(!captain){
             return res.status(401).json({msg:"invalid email and password "})
        }

        const isMatch = await captain.comparePassword(password)

        if(!isMatch){
            return res.status(401).json({msg:"you are passwored and email is incorrect"});
        }

        const token  = captain.generateAuthToken();

        res.cookie('token', token);

        return res.status(201).json({token ,captain ,
            msg:"you are now log in"
        })


    } catch (error) {
        console.log(`the err in login ${error}`);
        return res.status(501).json({msg:"you are Incorrect credential in LOg in" });
      
        
    }

}


module.exports.profileCaptain = async (req, res, ) => {
        res.status(200).json( {captain :req.captain});
}

module.exports.logoutCaptain = async (req, res, ) => {
    const token = req.cookies.token  || req.headers.authorization.token.split(' ')[1];
    await Blacklist.create({token});

    res.clearCookie('token');

    res.status(201).json({msg:"you  are logout Successfully  "})

}
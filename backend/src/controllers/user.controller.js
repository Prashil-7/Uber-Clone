const userModel = require('../model/user.model');
const { validationResult } = require('express-validator');

const userService = require('../services/user.services');
const Blacklist = require('../model/blacklist.model');


module.exports.registerUser = async (req, res,next) => {

    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.array() });
    }
    const {fullname, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);
     try {
        const user = await userService.createUser({
            firstname:fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        })
        
        const token = user.generateAuthToken();
        res.status(201).json({
        token,user , 
        message: 'User registered successfully'
        });
     } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
        next(error);
     }

}

module.exports.loginUser = async (req, res, next) => {
    const  err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.array() });
    }

    const { email, password} =req.body;
    

    try {
        const user = await userModel.findOne({email}).select('+password');

        if(!user){
            return res.status(401),json({
                msg:" Invalid email or password"
            }) 
        }
          const isMatch = await  user.comparePassword(password);

          if(!isMatch){return res.status(401).json({msg:"u are  email or password is incorrect"})}
        

          const token = user.generateAuthToken();
          
            res.cookie('token',token,{
                httpOnly: true,
                secure:process.env.NODE_ENV='production',
                maxAge: 3600000
            })


          return res.status(201).json({
            token ,user,
          })


    } catch (error) {
        console.log(`the err in login ,${error}`);
        
        return res.status(404).json({
            msg:" u are not login somewhere is errr ourside"
         })
         
    }
}

module.exports.getUserProfile = async (req,res)=>{
    res.json(req.user)
}

module.exports.logoutUser = async (req,res)=>{
        try{
    res.clearCookie('token');

        const authHeader = req.headers?.authorization || req.headers?.Authorization;
    const token = req.cookies?.token || (authHeader && authHeader.split(' ')[1]);


    // const token =req.cookies.token || req.headers.authorization.split(' ')[1];

    await Blacklist.create({token});
    res.status(200).json({mag:"user logout Successfully"})

        }catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ msg: 'Internal Server Error during logout' });
  }
}
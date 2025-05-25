const captainModel = require("../model/captain.model")



module.exports.createCaptain = async ({
    firstname, lastname,
    email,
    password,
    plate, vehicleType, capacity, color 
}) => {

    if(!firstname || !lastname || !color || 
        !vehicleType || !plate || !email || !password || !capacity ){
            
        throw new Error('all fields requried' );
     
       
        
    }

   
    try {
        const captain = await captainModel.create({
            fullname:{
                firstname, lastname
            },
            email, password,
            vehicle:{
                color,vehicleType,plate,capacity
            }
        })
        return captain;
    } catch (error) {
        console.log('thwe err in captain serevice ', error);
        res.json({mag:'captain serevice not available'})
        
    }
}
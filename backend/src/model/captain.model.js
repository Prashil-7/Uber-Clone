const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') 

const captainSchema= new mongoose.Schema({

    fullname:{
        firstname:{
         type:String,
        required:true,
        minLength:[3,'atleast 3 character']    
        },
        lastname:{
        type:String,
        required:true,
        minLength:[3,'atleast 3 character']}
    },
    email:{type:String,
         required:true,
         unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        select:false
    },
    soketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minLength:[3, 'atleast color is 3 character long']
        },
        plate:{
            type:String,
            required:true,
            minLength:[7, 'vehicle plate atleast 7 character long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            enum:['car','auto','motorcycle'],
            required:true
        }
    },
    location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }

    }


})


captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_CAPTAIN_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN})
    
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword = async  function (password){
    const salt=   await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}



const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;
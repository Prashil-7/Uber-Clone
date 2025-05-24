const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
        fullname:{
            firstname: {
                type: String,
                required: true,
                minlength: [3, 'first name atleast 3 characters']           },
            lastname: {
                type: String,
                required: true,
                minlength: [3, 'last name atleast 3 characters'] 
            }
        },
        email:{
            type: String,
            required: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
        },
        password: {
            type: String,
            required: true,
            minlength: [3, 'Password must be at least 3 characters long'],
            select: false
        },
        soketId: {
            type: String,
            default: null
        },
})


userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn: '24h'});
    return token;
};

userSchema.methods.comparePassword = async  function(password){
    return await bcrypt.compare(password, this.password);
}
userSchema.statics.hashPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const userModel = mongoose.model('user', userSchema);

module.exports =  userModel;
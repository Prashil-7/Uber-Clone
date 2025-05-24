const userModel = require('../model/user.model');

module.exports.createUser = async ({firstname, lastname, email, password}) => {

    if(!firstname || !lastname || !email || !password) {
        throw new Error('All fields are required');
    }
    try {
        const existingUser = await userModel.findOne({  email: email });
        if (existingUser) {
            throw new Error('User already exists');
        }
        const user = await userModel({
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password
        });
        return await user.save();
    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
        
    }
 
    
}
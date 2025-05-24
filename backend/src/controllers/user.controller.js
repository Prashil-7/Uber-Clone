const userModel = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const userService = require('../services/user.services');


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
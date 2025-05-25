const router = require('express').Router();
const{body, validationResult} = require('express-validator');
const userController = require('../controllers/user.controller');
const {authUser } = require('../middleware/user.middleware');


 const register = router.post('/register',  [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long')], userController.registerUser 
);

const login = router.post('/login', [
    body('email').isEmail().withMessage('please neter the valid E-mail address'),
    body('password').isLength({ min: 4 }).withMessage('Password must be at least 4 characters long')
], userController.loginUser);



const profileUser = router.get('/profile', authUser , userController.getUserProfile );

const logout = router.get('/logout', authUser , userController.logoutUser )



module.exports = router;
module.exports = {
    register,
    login,
    logout,
    profileUser

};





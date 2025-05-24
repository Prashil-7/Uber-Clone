const router = require('express').Router();
const{body, validationResult} = require('express-validator');
const userController = require('../controllers/user.controller');


 const register = router.post('/register',  [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long')], userController.registerUser 
);

module.exports = router;
module.exports = {
    register
};





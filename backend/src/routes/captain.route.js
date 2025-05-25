const router = require('express').Router();
const captainController = require('../controllers/captain.controller');
const {body}= require('express-validator');
const {captainAuth} = require('../middleware/captain.middlle')




const captainRegister = router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('firstname must have at least 3 characters'),
    body('fullname.lastname').isLength({min:3}).withMessage('lastname must have at least 3 characters'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min:3}).withMessage('Password must be at least 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Vehicle numberPlate must have at least 3 characters'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Vehicle type must have at least 3 characters'),
    body('vehicle.capacity')
    .toInt()
    .isInt({ min: 1 })
    .withMessage('Vehicle capacity must be a number and at least 1'),,
    body('vehicle.color').isLength({min:3}).withMessage('Vehicle color must have at least 3 characters'),

],captainController.registerCaptain

  )

  const captainLogin = router.post('/login',[ 
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min:3}).withMessage('Password must be at least 3 characters long')],captainController.loginCaptain)


const captainProfile = router.get('/profile', captainAuth, captainController.profileCaptain) 

const captainLogout = router.get('/logout', captainAuth, captainController.logoutCaptain) 

module.export = router;

module.exports= {
    captainRegister,
    captainLogin,
    captainProfile,
    captainLogout
   
}
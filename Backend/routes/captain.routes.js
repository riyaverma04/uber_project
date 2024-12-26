const express = require('express');
const captainModel = require('../models/captain.model');
const router = express.Router();
const { body } = require('express-validator')
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware')




router.post('/register', [
    body('email').isEmail().withMessage('invalid email.'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("first name must be atleast 3 character long."),
    body('password').isLength({ min: 6 }).withMessage("password must be at least 6 character long"),
    body("vehicle.color").isLength({min: 3 }).withMessage('color must be 3 letter long'),
    body("vehicle.plate").isLength({min: 3 }).withMessage('plate must contain atleast 3 characters'),
    body("vehicle.capacity").isLength({min: 1 }).withMessage('capacity must be atleast 1.'),
    body('vehicle.vehicleType').isIn(['car', 'auto-rickshaw', 'motorcycle']).withMessage('invalid vehicle type')
    

],
    captainController.registerCaptain
)


router.post('/login',[
    body('email').isEmail().withMessage('invalid email.'),
    body('password').isLength({min:6}).withMessage("password must be at least 6 character long."),
],
    captainController.loginCaptain
)

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);



module.exports = router;
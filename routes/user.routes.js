const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model')  // for creating user sechem

const bcrypt = require('bcrypt')  //For Passownrd Hah Form
// for register Page
router.get('/register' , (req,res)=>{
    res.render('register')
});

// For Handle Register Form and response
router.post('/register' ,
    body('email').trim().isEmail().isLength({min : 13}),
    body('password').trim().isLength({min : 3}),
    body('username').trim().isLength({min : 3}),
    
  async  (req,res)=>{
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                messege : 'Inavalid Data'
            })
            
        }
        // If data is valid then create users
        const {email, password, username} = req.body
        const hashPassword = await bcrypt.hash(password , 10)
          const newUser = await userModel.create({
            email,
            username,
            password: hashPassword
        })
        res.json(newUser)
        

})

module.exports = router;
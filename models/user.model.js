const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        require : true,
        trim : true,
        lowercase :true,
        unique: true,
        minlength: [3, 'must be 3 Charachters']
    },
    email:{
        type : String,
        require : true,
        trim : true,
        lowercase :true,
        unique: true,
        minlength: [13, 'must be 13 Charachters']
    },
    password:{
        type : String,
        require : true,
        trim : true,
        minlength: [5, 'must be 5 Charachters']
    }
})

const user = mongoose.model('user' , userSchema)

module.exports = user;
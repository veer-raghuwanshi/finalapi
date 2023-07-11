var mongoose = require('mongoose')
const registerschema = mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        required:[true,"Name is required"],
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        lowercase:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        lowercase:true,
        minlength:5,
        maxlength:10,
        trim:true
    },
    profileimage:{
     type:String,
     require:[true,"Profile Image is required"],
     trim:true
    },
    mobile:{
        type:String,
        required:[true,"Mobile is required"],
        minlength:10,
        maxlength:10,
        trim:true
    },
    city:{
        type:String,
        required:[true,"City is required"],
        trim:true
    },
    address:{
        type:String,
        required:[true,"Address is required"],
        trim:true
    },
    gender:{
        type:String,
        required:[true,"Gender is required"],
    },
    role:String,
    status:Number,
    info:String
})

//compile schema to model
const registerschemamodel = mongoose.model('reg_user',registerschema)

module.exports = registerschemamodel;
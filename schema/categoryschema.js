var mongoose = require('mongoose')
const categoryschema = mongoose.Schema({
    _id:Number,
    catname:{
        type:String,
        required:[true,"Category Name is required"],
        lowercase:true,
        trim:true
    },
    caticonname:{
     type:String,
     require:[true,"Category Image is required"],
     trim:true
    },
})

//compile schema to model
const categoryschemamodel = mongoose.model('category',categoryschema)

module.exports = categoryschemamodel;
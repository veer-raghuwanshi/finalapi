var mongoose = require('mongoose')
const subcategoryschema = mongoose.Schema({
    _id:Number,
    catname:{
        type:String,
        required:[true,"Category Name is required"],
        lowercase:true,
        trim:true
    },
    subcatname:{
        type:String,
        required:[true,"Sub Category Name is required"],
        lowercase:true,
        trim:true
    },
    subcaticonname:{
     type:String,
     require:[true,"SubCategory Image is required"],
     trim:true
    },
})

//compile schema to model
const subcategoryschemamodel = mongoose.model('subcategory',subcategoryschema)

module.exports = subcategoryschemamodel;
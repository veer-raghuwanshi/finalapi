require('./connection')
var registerschemamodel = require('../schema/registerschema')
var categoryschemamodel = require('../schema/categoryschema')
var subcategoryschemamodel = require('../schema/subcategoryschema')

function adminmodal() {
    this.fetchusers = (cond) => {
        return new Promise((resolve, reject) => {
            // to find record from collection
            registerschemamodel.find(cond)
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    this.manageuserstatusmodal = (urlObj) => {
        return new Promise((resolve, reject) => {
            if (urlObj.query.s == "block") {
                // to update status in collection
                registerschemamodel.findByIdAndUpdate(parseInt(urlObj.query.regId),
                    {
                        $set: {
                            status: 0
                        }
                    },
                    /*
                    'useFindAndModify': true by default. Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify().
   
                    { new : true } will return the modified document rather than the original. 
                    */
                    {
                        new: true,
                        useFindAndModify: false
                    }
                )
                    .then((result) => {
                        resolve(result)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            }
            else if (urlObj.query.s == "verify") {
                // to update status in collection
                registerschemamodel.findByIdAndUpdate(parseInt(urlObj.query.regId),
                    {
                        $set: {
                            status: 1
                        }
                    },
                    /*
                    'useFindAndModify': true by default. Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify().
   
                    { new : true } will return the modified document rather than the original. 
                    */
                    {
                        new: true,
                        useFindAndModify: false
                    }
                )
                    .then((result) => {
                        resolve(result)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            } 
            else if (urlObj.query.s == "delete") {
                registerschemamodel.findByIdAndDelete(parseInt(urlObj.query.regId), {
                    new: true,
                    useFindAndModify: false
                })
                    .then((result) => {
                        resolve({ "msg": "Record Deleted Successfully!!" })
                    })
                    .catch((error) => {
                        reject({ "msg": "Record Not Deleted !!", error: error })
                    })
            }
        })
    }
    this.fetchallcategory = (cond) => {
        return new Promise((resolve, reject) => {
            // to find record from collection
            categoryschemamodel.find(cond)
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    this.addcategorymodal = (catdetails) => {
        return new Promise((resolve, reject) => {
            var obj = new categoryschemamodel(catdetails)
            obj.save()
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    this.fetchallsubcategory=(cond)=>{
        return new Promise((resolve, reject) => {
            // to find record from collection
            subcategoryschemamodel.find(cond)
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    this.addsubcategorymodal=(subcatdetails)=>{
        return new Promise((resolve, reject) => {
            var obj = new subcategoryschemamodel(subcatdetails)
            obj.save()
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}

module.exports = new adminmodal()
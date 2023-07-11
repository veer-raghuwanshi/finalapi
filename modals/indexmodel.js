require('./connection')
var registerschemamodel = require('../schema/registerschema')
function indexmodal(){
    this.userregistermodal=(userdetails)=>{
        return new Promise((resolve, reject) => {
          
            //a document instance
            var obj = new registerschemamodel(userdetails)

            //save model to database
            obj.save()
            .then((result)=>{
                resolve(result)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }
    this.fetchusers=(cond)=>{
        return new Promise((resolve, reject) => {
            // to find record from collection
            registerschemamodel.find(cond)
            .then((result)=>{
                resolve(result)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }
}

module.exports = new indexmodal()
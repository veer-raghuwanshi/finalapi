var registerschemamodal = require('../schema/registerschema')

function usermodal() {
    this.fetchusers = (cond) => {
        return new Promise((resolve, reject) => {
            // to find record from collection
            registerschemamodal.find(cond)
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    this.userupdatemodal = (userdetails) => {
        return new Promise((resolve, reject) => {
            registerschemamodal.findByIdAndUpdate(userdetails._id, {
                $set: {
                    name: userdetails.name,
                    email:userdetails.email,
                    password: userdetails.password,
                    profileimage: userdetails.profileimage,
                    mobile: userdetails.mobile,
                    city: userdetails.city,
                    address: userdetails.address,
                    gender: userdetails.gender
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
            .then((result)=>{
                resolve(result)
            })
            .catch((error)=>{
                reject(error)
            })
        })

    }
}

module.exports = new usermodal()
var indexmodel = require('../modals/indexmodel')

function indexcontroller() {
    this.userregister = (userdetails, imgpath) => {
        return new Promise((resolve, reject) => {
            indexmodel.fetchusers({})
                .then((result) => {
                    var len = result.length
                    var id = len == 0 ? 1 : result[len - 1]._id + 1;
                    userdetails = {
                        ...userdetails,
                        _id: id,
                        status: 0,
                        role: "user",
                        info: Date(),
                        profileimage: "http://localhost:3000/" + imgpath
                    }
                    indexmodel.userregistermodal(userdetails)
                        .then((result) => {
                            resolve(result)
                        })
                        .catch((error) => {
                            reject(error)
                        })
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    this.userlogin=(userdetails)=>{
        return new Promise((resolve, reject) => {
            var getuserdetails = {...userdetails,status:1}
            indexmodel.fetchusers(getuserdetails)
            .then((result)=>{
                const responseCode = result.length == 0 ? 0 : (result[0].role == "admin" ? 1 : 2)
                resolve({"responseCode":responseCode,"userdetails":result[0]}) 
            })
            .catch((error)=>{
                reject(error)
            })
        })
        
    }
}

module.exports = new indexcontroller()

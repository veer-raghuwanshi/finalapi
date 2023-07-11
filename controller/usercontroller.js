var usermodal = require('../modals/usermodal')


function usercontroller(){
    this.updateuser=(userdetails,imgpath)=>{
        return new Promise((resolve, reject) => {
            usermodal.fetchusers({})
            .then((result)=>{
                var data = result 
                var gId = 0
                for (const user of data) {
                    if (userdetails.email==user.email) {
                        gId = user._id
                        break
                    }    
                }
                userdetails = {...userdetails,_id:gId,status:1,role:'user',info:Date(),profileimage:"http://localhost:3000/"+imgpath}
                usermodal.userupdatemodal(userdetails)
                .then((result)=>{
                    resolve(result)
                })
                .catch((error)=>{
                    reject(error)
                })
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }
}

module.exports = new usercontroller()
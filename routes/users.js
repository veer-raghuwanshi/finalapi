var express = require('express');
var router = express.Router();
var imgupload = require('../modals/imgupload')
var usercontroller = require('../controller/usercontroller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/updateuser',imgupload.single('profileimage'),(req,res)=>{
  console.log(req.body)
  console.log("Image:=>",req.file.path)

  usercontroller.updateuser(req.body,req.file.path)
  .then((result)=>{
    res.json({"msg":"User Profile Updated Successfully!!!!","record":result})
  })
  .catch((err)=>{
    res.json({"msg":"User Profile Not Updated!!!!","error":err})
  })
})


module.exports = router;

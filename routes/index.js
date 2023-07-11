var express = require('express');
var router = express.Router();
var imgupload = require('../modals/imgupload')
var indexcontroller = require('../controller/indexcontroller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// router.post('/register',(req,res)=>{
//   console.log(req.body)
//   indexcontroller.userregister(req.body)
//   .then((result)=>{
//     res.json({"msg":"User Register Successfully!!!!","record":result})
//   })
//   .catch((err)=>{
//     res.json({"msg":"User Not Register!!!!","error":err})
//   })
// })

router.post('/register',imgupload.single('profileimage'),(req,res)=>{
  console.log(req.body)
  console.log("Image:=>",req.file.path)

  indexcontroller.userregister(req.body,req.file.path)
  .then((result)=>{
    res.json({"msg":"User Register Successfully!!!!","record":result})
  })
  .catch((err)=>{
    res.json({"msg":"User Not Register!!!!","error":err})
  })
})

router.post('/login',(req,res)=>{
  console.log(req.body)
  indexcontroller.userlogin(req.body)
  .then((result)=>{
    console.log(result)
    if (result["responseCode"]==0) 
    {
      res.json({"msg":"Invalid User or Verfiy User ,Please try again"})
    }
    else if(result["responseCode"]==1)
    {
      res.json({"msg":"Admin Login Successfully!!!","adminDetails":result})
    }
    else if(result["responseCode"]==2)
    {
      res.json({"msg":"User Login Successfully!!!","userDetails":result})
    }
  })
  .catch((error)=>{
    console.log(error)
  })
})

module.exports = router;

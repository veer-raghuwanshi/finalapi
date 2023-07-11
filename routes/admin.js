var express = require('express');
var router = express.Router();
var url = require('url')
var admincontroller = require('../controller/admincontroller')
var imgcategory = require('../modals/imgcategory')
var imgsubcategory = require('../modals/imgsubcategory')

router.get('/getallusers', (req, res) => {
  admincontroller.fetchallusers()
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      res.json({ "msg": "No User Available", "error": error })
    })
})

router.get('/manageuserstatus', (req, res) => {
  var urlObj = url.parse(req.url, true)
  console.log(urlObj)
  admincontroller.manageuserstatus(urlObj)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    })
})


router.post('/addcategory', imgcategory.single('caticonname'), (req, res) => {
  console.log(req.body)
  console.log("Image Path:=>", req.file.path)
  admincontroller.addcategory(req.body, req.file.path)
    .then((result) => {
      res.json({ "msg": "Category Added Successfully!!!", category: result })
    })
    .catch((error) => {
      res.json({ "msg": "Category Not Added!!!", error: error })
    })
})

router.post('/addsubcategory', imgsubcategory.single('subcaticonname'), (req, res) => {
  console.log(req.body)
  console.log("Image Path:=>", req.file.path)
  admincontroller.addsubcategory(req.body, req.file.path)
    .then((result) => {
      res.json({ "msg": "Sub Category Added Successfully!!!", category: result })
    })
    .catch((error) => {
      res.json({ "msg": "Sub Category Not Added!!!", error: error })
    })
})


module.exports = router
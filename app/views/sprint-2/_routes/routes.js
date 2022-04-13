const express = require('express')
const router = express.Router()

//Function to create the data
function createData(req,res){
  req.session.data.vehicles = require('../../' + req.originalUrl.split('/')[1] + '/_data/vehicle-data.js').vehicles;
  req.session.data.sprint = req.originalUrl.split('/')[1]
  res.redirect(req.originalUrl)
};

//Create Sprint data if not already created
router.use('/', (req, res, next) => {
  if (req.session.data.sprint !== req.originalUrl.split('/')[1]) {
  createData(req,res);
} else {
  next();
  }
});

router.get('/pass-data/vehicle-registration', function (req, res ) {
  res.render(req.originalUrl.split('/')[1] + '/pass-data/vehicle-registration')
})

router.post('/pass-data/vehicle-registration', function (req, res) {
res.redirect('vehicle-type')
})



router.get('/pass-data/vehicle-type', function (req, res ) {
  res.render(req.originalUrl.split('/')[1]  + '/pass-data/vehicle-type')
})
router.post('/pass-data/vehicle-type', function (req, res) {
res.redirect('vehicle-features')
})



router.get('/pass-data/vehicle-features', function (req, res ) {
  res.render(req.originalUrl.split('/')[1]  + '/pass-data/vehicle-features')
})
router.post('/pass-data/vehicle-features', function (req, res) {
res.redirect('vehicle-check-answers')
})






module.exports = router

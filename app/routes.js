const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Reset session data
router.get('/', function (req, res ) {
  req.session.data = {}; //reset the session data
  res.render('index')
})


////////////////////////////////CURRENT SPRINT///////////////////////////////////////
//redirect
router.use('/current', require('./views/current/_routes/routes'));


////////////////////////////////SPRINT 1////////////////////////////////////////////
//redirect
router.use('/sprint-1', require('./views/sprint-1/_routes/routes'));


////////////////////////////////SPRINT 2////////////////////////////////////////////
//redirect
router.use('/sprint-2', require('./views/sprint-2/_routes/routes'));


////////////////////////////////SPRINT 3////////////////////////////////////////////
//redirect
router.use('/sprint-3', require('./views/sprint-3/_routes/routes'));

module.exports = router

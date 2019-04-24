const express = require('express')
const router = express.Router()

var controller = require('../Controller/Controller.js')


router.get('/', controller.accueil)
router.get('/list', controller.getList)
     .post('/list', controller.postList)
     .put('/list', controller.putList)
     .delete('/list', controller.deleteList)

module.exports = router;

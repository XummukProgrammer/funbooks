const express = require('express')
const DirectionsController = require('../controllers/directions-controller.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, DirectionsController.create)
router.get('/get/:id', DirectionsController.get)
router.get('/get_all', DirectionsController.getAll)

exports.get = () => {
    return router;
}

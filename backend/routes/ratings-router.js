const express = require('express')
const RatingsController = require('../controllers/ratings-controller.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, RatingsController.create)
router.get('/get/:id', RatingsController.get)
router.get('/get_all', RatingsController.getAll)

exports.get = () => {
    return router;
}

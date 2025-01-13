const express = require('express')
const UsersController = require('../controllers/users-controller.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/add', urlencodedParser, UsersController.add)

exports.get = () => {
    return router
}

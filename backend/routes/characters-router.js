const express = require('express')
const CharactersController = require('../controllers/characters-controller.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, CharactersController.create)
router.get('/get/:id', CharactersController.get)
router.get('/get_all', CharactersController.getAll)

exports.get = () => {
    return router;
}

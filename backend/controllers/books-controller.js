const isJSON = require('is-json')
const BooksModel = require('../models/books-model.js')
const CategoriesModel = require('../models/categories-model.js')
const UsersModel = require('../models/users-model.js')

exports.create = async (request, response) => {
    const form = request.body
    if (!form.tokenId || !form.categoryId || !form.tags || !form.characters) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    if (!isJSON.strict(form.tags) || !isJSON.strict(form.characters)) {
        return response.json({
            'success': false,
            'error': 'The tags or characters parameters are not a valid JSON string.'
        })
    }

    const tokenId = form.tokenId
    const categoryId = form.categoryId
    const tags = JSON.parse(form.tags)
    const characters = JSON.parse(form.characters)

    if (!await UsersModel.hasByTokenId(tokenId)) {
        return response.json({
            'success': false,
            'error': 'Invalid token.'
        })
    }

    if (!await CategoriesModel.has(categoryId)) {
        return response.json({
            'success': false,
            'error': 'Category was not found.'
        })
    }

    const success = await BooksModel.create(tokenId, categoryId, tags, characters)

    if (success) {
        response.json({
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'It is impossible to create a book.'
        })
    }
}

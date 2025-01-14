const BooksModel = require('../models/books-model.js')

exports.create = async (request, response) => {
    const tokenId = request.body.tokenId
    const categoryId = request.body.categoryId
    const text = request.body.text
    const tags = JSON.parse(request.body.tags)
    const characters = JSON.parse(request.body.characters)

    const success = await BooksModel.create(tokenId, categoryId, text, tags, characters)

    response.setHeader('Content-Type', 'application/json');

    if (success) {
        response.end(JSON.stringify({
            'error': ''
        }))
    } else {
        response.end(JSON.stringify({
            'error': 'It is impossible to create a book'
        }))
    }
}

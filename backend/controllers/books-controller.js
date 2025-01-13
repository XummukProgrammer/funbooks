const BooksModel = require('../models/books-model.js')

exports.create = async (request, response) => {
    const tokenId = request.body.tokenId
    const text = request.body.text

    const success = await BooksModel.create(tokenId, text)

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

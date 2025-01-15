const BooksModel = require('../models/books-model.js')

exports.create = async (request, response) => {
    const book = await BooksModel.create(request.user._id, request.category._id, request.tags, request.characters)

    response.json({
        'data': {
            'bookId': book.insertedId
        },
        'success': true
    })
}

const BooksModel = require('../models/books-model.js')

async function getBook(id) {
    return await BooksModel.get(id)
}

async function getBookGet(request, response, next) {
    const bookId = request.params.bookId
    const book = await getBook(bookId)
    if (!book) {
        return response.json({
            'success': false,
            'error': 'The book was not found.'
        })
    }
    request.book = book
    next()
}

async function getBookPost(request, response, next) {
    const form = request.body
    if (!form.bookId) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }
    const bookId = form.bookId
    const book = await getBook(bookId)
    if (!book) {
        return response.json({
            'success': false,
            'error': 'The book was not found.'
        })
    }
    request.book = book
    next()
}

exports.getBook = async (request, response, next) => {
    if (request.method == 'GET') {
        return getBookGet(request, response, next)
    } else if (request.method == 'POST') {
        return getBookPost(request, response, next)
    }
}

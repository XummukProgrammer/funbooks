const ChaptersModel = require('../models/chapters-model.js')
const BooksModel = require('../models/books-model.js')

exports.create = async (request, response) => {
    const form = request.body
    if (!form.bookId || !form.title || !form.text) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const bookId = form.bookId
    const title = form.title
    const text = form.text

    if (!await BooksModel.has(bookId)) {
        return response.json({
            'success': false,
            'error': 'The book was not found.'
        })
    }

    const chapter = await ChaptersModel.create(bookId, title, text)

    response.json({
        'data': {
            'chapterId': chapter['insertedId']
        },
        'success': true
    })
}

exports.getById = async (request, response) => {
    const params = request.params
    if (!params.id) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const id = params.id
    const chapter = await ChaptersModel.getById(id)

    if (chapter) {
        response.json({
            'data': {
                'chapter': chapter
            },
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'Chapter not found'
        })
    }
}

exports.getByBookId = async (request, response) => {
    const params = request.params
    if (!params.bookId) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const bookId = params.bookId

    if (!await BooksModel.has(bookId)) {
        return response.json({
            'success': false,
            'error': 'The book was not found.'
        })
    }

    const chapters = await ChaptersModel.getByBookId(bookId)

    response.json({
        'data': {
            'chapters': chapters
        },
        'success': true
    })
}

exports.getAll = async (request, response) => {
    const chapters = await ChaptersModel.getAll()

    response.json({
        'data': {
            'chapters': chapters
        },
       'success': true
    })
}

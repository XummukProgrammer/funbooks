const ChaptersModel = require('../models/chapters-model.js')

exports.create = async (request, response) => {
    const bookId = request.body.bookId
    const title = request.body.title
    const text = request.body.text

    const chapter = await ChaptersModel.create(bookId, title, text)

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        'data': {
            'chapterId': chapter['insertedId']
        },
        'error': ''
    }))
}

exports.getById = async (request, response) => {
    const id = request.params.id

    const chapter = await ChaptersModel.getById(id)

    response.setHeader('Content-Type', 'application/json');

    if (chapter) {
        response.end(JSON.stringify({
            'data': {
                'chapter': chapter
            },
            'error': ''
        }))
    } else {
        response.end(JSON.stringify({
            'error': 'Chapter not found'
        }))
    }
}

exports.getByBookId = async (request, response) => {
    const bookId = request.params.bookId

    const chapters = await ChaptersModel.getByBookId(bookId)

    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify({
        'data': {
            'chapters': chapters
        },
        'error': ''
    }))
}

exports.getAll = async (request, response) => {
    const chapters = await ChaptersModel.getAll()

    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify({
        'data': {
            'chapters': chapters
        },
        'error': ''
    }))
}

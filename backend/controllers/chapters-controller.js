const ChaptersModel = require('../models/chapters-model.js')

exports.create = async (request, response) => {
    const form = request.body
    if (!form.title || !form.text) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const title = form.title
    const text = form.text

    const chapter = await ChaptersModel.create(request.book._id, title, text)

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
            'error': 'Chapter not found.'
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

    const chapters = await ChaptersModel.getByBookId(request.book._id)

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

const TagsModel = require('../models/tags-model.js')
const RatingsModel = require('../models/ratings-model.js')

exports.create = async (request, response) => {
    const form = request.body
    if (!form.name || !form.ratingId) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const name = request.body.name
    const ratingId = request.body.ratingId

    if (!await RatingsModel.has(ratingId)) {
        return response.json({
            'success': false,
            'error': 'The rating was not found.'
        })
    }

    const tag = await TagsModel.create(name, ratingId)

    response.json({
        'data': {
            'tagId': tag['insertedId']
        },
        'success': true
    })
}

exports.getFromId = async (request, response) => {
    const id = request.params.id
    const tag = await TagsModel.getFromId(id)

    if (tag) {
        response.json({
            'data': {
                'tag': tag
            },
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'Tag not found.'
        })
    }
}

exports.getFromName = async (request, response) => {
    const name = request.params.name
    const tag = await TagsModel.getFromName(name)

    if (tag) {
        response.json({
            'data': {
                'tag': tag
            },
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'Tag not found.'
        })
    }
}

exports.getAll = async (request, response) => {
    const tags = await TagsModel.getAll()

    response.json({
        'data': {
            'tags': tags
        },
        'success': true
    })
}

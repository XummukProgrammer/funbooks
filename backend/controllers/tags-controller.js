const TagsModel = require('../models/tags-model.js')

exports.create = async (request, response) => {
    const name = request.body.name

    const tag = await TagsModel.create(name)

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        'data': {
            'tagId': tag['insertedId']
        },
        'error': ''
    }))
}

exports.getFromId = async (request, response) => {
    const id = request.params.id

    const tag = await TagsModel.getFromId(id)

    response.setHeader('Content-Type', 'application/json');

    if (tag) {
        response.end(JSON.stringify({
            'data': {
                'tag': tag
            },
            'error': ''
        }))
    } else {
        response.end(JSON.stringify({
            'error': 'Tag not found'
        }))
    }
}

exports.getFromName = async (request, response) => {
    const name = request.params.name

    const tag = await TagsModel.getFromName(name)

    response.setHeader('Content-Type', 'application/json');

    if (tag) {
        response.end(JSON.stringify({
            'data': {
                'tag': tag
            },
            'error': ''
        }))
    } else {
        response.end(JSON.stringify({
            'error': 'Tag not found'
        }))
    }
}

exports.getAll = async (request, response) => {
    const tags = await TagsModel.getAll()

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        'data': {
            'tags': tags
        },
        'error': ''
    }))
}

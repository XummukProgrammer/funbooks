const isJSON = require('is-json')
const TagsModel = require('../models/tags-model.js')

async function getTags(tags, request, response, next) {
    if (!isJSON.strict(tags)) {
        return response.json({
            'success': false,
            'error': 'The tags parameters are not a valid JSON string.'
        })
    }
    const jsonTags = JSON.parse(tags)
    var tags = []
    for (const id of jsonTags) {
        const tag = await TagsModel.getFromId(id)
        if (tag) {
            tags.push(tag._id)
        }
    }
    request.tags = tags
    next()
}

async function getTagsGet(request, response, next) {
    const tags = request.params.tags
    await getTags(tags, request, response, next)
}

async function getTagsPost(request, response, next) {
    const form = request.body
    if (!form.tags) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }
    const tags = form.tags
    await getTags(tags, request, response, next)
}

exports.getTags = async (request, response, next) => {
    if (request.method == 'GET') {
        return getTagsGet(request, response, next)
    } else if (request.method == 'POST') {
        return getTagsPost(request, response, next)
    }
}

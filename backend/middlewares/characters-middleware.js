const isJSON = require('is-json')
const CharactersModel = require('../models/characters-model.js')

async function getCharacters(_characters, request, response, next) {
    if (!isJSON.strict(_characters)) {
        return response.json({
            'success': false,
            'error': 'The characters parameters are not a valid JSON string.'
        })
    }
    const jsonTags = JSON.parse(_characters)
    var characters = []
    for (const id of jsonTags) {
        const tag = await CharactersModel.get(id)
        if (tag) {
            characters.push(tag._id)
        }
    }
    request.characters = characters
    next()
}

async function getCharactersGet(request, response, next) {
    const characters = request.params.characters
    await getCharacters(characters, request, response, next)
}

async function getCharactersPost(request, response, next) {
    const form = request.body
    if (!form.characters) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }
    const characters = form.characters
    await getCharacters(characters, request, response, next)
}

exports.getCharacters = async (request, response, next) => {
    if (request.method == 'GET') {
        return getCharactersGet(request, response, next)
    } else if (request.method == 'POST') {
        return getCharactersPost(request, response, next)
    }
}

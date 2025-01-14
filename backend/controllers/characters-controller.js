const CharactersModel = require('../models/characters-model.js')

exports.create = async (request, response) => {
    const name = request.body.name

    const character = await CharactersModel.create(name)

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        'data': {
            'characterId': character['insertedId']
        },
        'error': ''
    }))
}

exports.get = async (request, response) => {
    const id = request.params.id

    const character = await CharactersModel.get(id)

    response.setHeader('Content-Type', 'application/json');

    if (character) {
        response.end(JSON.stringify({
            'data': {
                'character': character
            },
            'error': ''
        }))
    } else {
        response.end(JSON.stringify({
            'error': 'Character not found'
        }))
    }
}

exports.getAll = async (request, response) => {
    const characters = await CharactersModel.getAll()

    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify({
        'data': {
            'characters': characters
        },
        'error': ''
    }))
}

const CharactersModel = require('../models/characters-model.js')

exports.create = async (request, response) => {
    const form = request.body
    if (!form.name) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const name = form.name
    const character = await CharactersModel.create(name)

    response.json({
        'data': {
            'characterId': character['insertedId']
        },
        'success': true
    })
}

exports.get = async (request, response) => {
    const id = request.params.id
    const character = await CharactersModel.get(id)

    if (character) {
        response.json({
            'data': {
                'character': character
            },
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'Character not found'
        })
    }
}

exports.getAll = async (request, response) => {
    const characters = await CharactersModel.getAll()

    response.json({
        'data': {
            'characters': characters
        },
        'success': true
    })
}

const DirectionsModel = require('../models/directions-model.js')

exports.create = async (request, response) => {
    const form = request.body
    if (!form.name) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const name = form.name
    const direction = await DirectionsModel.create(name)

    response.json({
        'data': {
            'directionId': direction['insertedId']
        },
        'success': true
    })
}

exports.get = async (request, response) => {
    const id = request.params.id
    const direction = await DirectionsModel.get(id)

    if (direction) {
        response.json({
            'data': {
                'direction': direction
            },
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'Direction not found.'
        })
    }
}

exports.getAll = async (request, response) => {
    const directions = await DirectionsModel.getAll()

    response.json({
        'data': {
            'directions': directions
        },
        'success': true
    })
}

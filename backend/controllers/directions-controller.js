const DirectionsModel = require('../models/directions-model.js')

exports.create = async (request, response) => {
    const name = request.body.name

    const direction = await DirectionsModel.create(name)

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        'data': {
            'directionId': direction['insertedId']
        },
        'error': ''
    }))
}

exports.get = async (request, response) => {
    const id = request.params.id

    const direction = await DirectionsModel.get(id)

    response.setHeader('Content-Type', 'application/json');

    if (direction) {
        response.end(JSON.stringify({
            'data': {
                'direction': direction
            },
            'error': ''
        }))
    } else {
        response.end(JSON.stringify({
            'error': 'Direction not found'
        }))
    }
}

exports.getAll = async (request, response) => {
    const directions = await DirectionsModel.getAll()

    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify({
        'data': {
            'directions': directions
        },
        'error': ''
    }))
}

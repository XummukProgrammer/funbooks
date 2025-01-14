const RatingsModel = require('../models/ratings-model.js')

exports.create = async (request, response) => {
    const name = request.body.name
    const factor = request.body.factor

    const rating = await RatingsModel.create(name, factor)

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        'data': {
            'ratingId': rating['insertedId']
        },
        'error': ''
    }))
}

exports.get = async (request, response) => {
    const id = request.params.id

    const rating = await RatingsModel.get(id)

    response.setHeader('Content-Type', 'application/json');

    if (rating) {
        response.end(JSON.stringify({
            'data': {
                'rating': rating
            },
            'error': ''
        }))
    } else {
        response.end(JSON.stringify({
            'error': 'Rating not found'
        }))
    }
}

exports.getAll = async (request, response) => {
    const ratings = await RatingsModel.getAll()

    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify({
        'data': {
            'ratings': ratings
        },
        'error': ''
    }))
}

const isNumber = require('is-number')
const RatingsModel = require('../models/ratings-model.js')

exports.create = async (request, response) => {
    const form = request.body
    if (!form.name || !form.factor) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    if (!isNumber(form.factor)) {
        return response.json({
            'success': false,
            'error': 'A factor is not a number.'
        })
    }

    const name = form.name
    const factor = Number(form.factor)
    const rating = await RatingsModel.create(name, factor)

    response.json({
        'data': {
            'ratingId': rating['insertedId']
        },
        'success': true
    })
}

exports.get = async (request, response) => {
    const id = request.params.id
    const rating = await RatingsModel.get(id)

    if (rating) {
        response.json({
            'data': {
                'rating': rating
            },
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'Rating not found.'
        })
    }
}

exports.getAll = async (request, response) => {
    const ratings = await RatingsModel.getAll()

    response.json({
        'data': {
            'ratings': ratings
        },
        'success': true
    })
}

const RatingsModel = require('../models/ratings-model.js')

async function getRating(ratingId, request, response, next) {
    const rating = await RatingsModel.get(ratingId)
    if (!rating) {
        return response.json({
            'success': false,
            'error': 'The rating was not found.'
        })
    }
    request.rating = rating
    next()
}

async function getRatingGet(request, response, next) {
    const ratingId = request.params.ratingId
    await getRating(ratingId, request, response, next)
}

async function getRatingPost(request, response, next) {
    const form = request.body
    if (!form.ratingId) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }
    const ratingId = form.ratingId
    await getRating(ratingId, request, response, next)
}

exports.getRating = async (request, response, next) => {
    if (request.method == 'GET') {
        return getRatingGet(request, response, next)
    } else if (request.method == 'POST') {
        return getRatingPost(request, response, next)
    }
}

const DirectionsModel = require('../models/directions-model.js')

async function getDirection(directionId, request, response, next) {
    const direction = await DirectionsModel.get(directionId)
    if (!direction) {
        return response.json({
            'success': false,
            'error': 'The direction was not found.'
        })
    }
    request.direction = direction
    next()
}

async function getDirectionGet(request, response, next) {
    const directionId = request.params.directionId
    await getDirection(directionId, request, response, next)
}

async function getDirectionPost(request, response, next) {
    const form = request.body
    if (!form.directionId) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }
    const directionId = form.directionId
    await getDirection(directionId, request, response, next)
}

exports.getDirection = async (request, response, next) => {
    if (request.method == 'GET') {
        return getDirectionGet(request, response, next)
    } else if (request.method == 'POST') {
        return getDirectionPost(request, response, next)
    }
}

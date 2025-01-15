const UsersModel = require('../models/users-model.js')

async function getUserByTokenId(tokenId) {
    return await UsersModel.getByTokenId(tokenId)
}

async function authenticateGet(request, response, next) {
    const tokenId = request.params.tokenId
    const user = await getUserByTokenId(tokenId)
    if (!user) {
        return response.json({
            'success': false,
            'error': 'Invalid token.'
        })
    }
    request.user = user
    next()
}

async function authenticatePost(request, response, next) {
    const form = request.body

    if (!form.tokenId) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const tokenId = form.tokenId
    const user = await getUserByTokenId(tokenId)
    if (!user) {
        return response.json({
            'success': false,
            'error': 'Invalid token.'
        })
    }
    request.user = user
    next()
}

exports.authenticate = async (request, response, next) => {
    if (request.method == 'GET') {
        return authenticateGet(request, response, next)
    } else if (request.method == 'POST') {
        return authenticatePost(request, response, next)
    }
}

const UsersModel = require('../models/users-model.js')

async function getUserByTokenId(tokenId) {
    return await UsersModel.getByTokenId(tokenId)
}

async function isAuthenticateGet(request, response, next) {
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

async function isAuthenticatePost(request, response, next) {
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

exports.isAuthenticate = async (request, response, next) => {
    if (request.method == 'GET') {
        return isAuthenticateGet(request, response, next)
    } else if (request.method == 'POST') {
        return isAuthenticatePost(request, response, next)
    }
}

const UsersModel = require('../models/users-model.js')

async function isAuthenticateGet(request, response, next) {
    const tokenId = request.params.tokenId

    if (!await UsersModel.hasByTokenId(tokenId)) {
        return response.json({
            'success': false,
            'error': 'Invalid token.'
        })
    }

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

    if (!await UsersModel.hasByTokenId(tokenId)) {
        return response.json({
            'success': false,
            'error': 'Invalid token.'
        })
    }

    next()
}

exports.isAuthenticate = async (request, response, next) => {
    if (request.method == 'GET') {
        return isAuthenticateGet(request, response, next)
    } else if (request.method == 'POST') {
        return isAuthenticatePost(request, response, next)
    }
}

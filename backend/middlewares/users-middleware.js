const UsersModel = require('../models/users-model.js')

exports.isAuthenticateGet = async (request, response, next) => {
    const tokenId = request.params.tokenId

    if (!await UsersModel.hasByTokenId(tokenId)) {
        return response.json({
            'success': false,
            'error': 'Invalid token.'
        })
    }

    next()
}

exports.isAuthenticatePost = async (request, response, next) => {
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

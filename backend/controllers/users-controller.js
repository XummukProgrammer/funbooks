const UsersModel = require('../models/users-model.js')
const TokensModel = require('../models/tokens-model.js')

exports.create = async (request, response) => {
    const form = request.body
    if (!form.login || !form.password) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const login = form.login
    const password = form.password
    const hasUser = await UsersModel.has(login)
    
    if (!hasUser) {
        await UsersModel.create(login, password)
    
        response.json({
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'The user already exists'
        })
    }
}

exports.login = async (request, response) => {
    const form = request.body
    if (!form.login || !form.password) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const login = form.login
    const password = form.password
    const user = await UsersModel.getByLoginAndPassword(login, password)
    
    if (user)  {
        const token = await TokensModel.create(user['_id'])
        response.json({
            'data': {
                'tokenId': token['insertedId']
            },
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'Invalid username or password'
        })
    }
}

exports.get = async (request, response) => {
    const tokenId = request.params.tokenId
    const user = await UsersModel.getByTokenId(tokenId)

    if (user) {
        response.json({
            'data': {
                'user': user
            },
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'The user was not found'
        })
    }
}

exports.getAll = async (request, response) => {
    const users = await UsersModel.getAll()

    response.json({
        'data': {
            'users': users
        },
        'success': true
    })
}

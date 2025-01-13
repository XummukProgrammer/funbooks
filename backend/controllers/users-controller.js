const UsersModel = require('../models/users-model.js')
const TokensModel = require('../models/tokens-model.js')

exports.create = async (request, response) => {
    const userLogin = request.body.login
    const userPassword = request.body.password
    await UsersModel.create(userLogin, userPassword)
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        'error': ''
    }))
}

exports.login = async (request, response) => {
    const userLogin = request.body.login
    const userPassword = request.body.password
    const user = await UsersModel.getByLoginAndPassword(userLogin, userPassword)
    
    response.setHeader('Content-Type', 'application/json');

    if (user)  {
        const token = await TokensModel.create(user['_id'])
        response.end(JSON.stringify({
            'data': {
                'tokenId': token['insertedId']
            },
            'error': ''
        }))
    } else {
        response.end(JSON.stringify({
            'error': 'Invalid username or password'
        }));
    }
}

exports.get = async (request, response) => {
    const tokenId = request.params.tokenId
    const user = await UsersModel.getByTokenId(tokenId)

    response.setHeader('Content-Type', 'application/json');

    if (user) {
        response.end(JSON.stringify({
            'data': {
                'user': user
            },
            'error': ''
        }));
    } else {
        response.end(JSON.stringify({
            'error': 'The user was not found'
        }));
    }
}

exports.getAll = async (request, response) => {
    const users = await UsersModel.getAll()

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(users))
}

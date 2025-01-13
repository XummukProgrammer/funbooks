const UsersModel = require('../models/users-model.js')

exports.add = async (request, response) => {
    const userLogin = request.body.login
    const userPassword = request.body.password

    await UsersModel.add(userLogin, userPassword)

    response.end('ok')
}

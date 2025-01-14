
const ObjectId = require('mongodb').ObjectId
const DatabaseModule = require('../Modules/database-module.js')
const TokensModel = require('./tokens-model.js')
const CrypterModule = require('../Modules/crypter-module.js')

exports.create = async (userLogin, userPassword) => {
    const users = DatabaseModule.getUsers()
    await users.insertOne({ 
        'login': userLogin,
        'password': await CrypterModule.generate(userPassword)
    })
}

exports.get = async (id) => {
    const users = DatabaseModule.getUsers()
    return await users.findOne({ _id: new ObjectId(id) })
}

exports.getByLogin = async (login) => {
    const users = DatabaseModule.getUsers()
    return await users.findOne({
        'login': login
    })
}

exports.has = async (login) => {
    return await this.getByLogin(login) != null
}

exports.getByLoginAndPassword = async (login, password) => {
    const user = await this.getByLogin(login)

    if (user) {
        if (await CrypterModule.check(password, user['password'])) {
            return user;
        }
    }

    return null
}

exports.getByTokenId = async (tokenId) => {
    const userId = await TokensModel.getUserId(tokenId)

    if (userId) {
        return await this.get(userId)
    }

    return null
}

exports.getAll = async () => {
    const users = DatabaseModule.getUsers()
    return await users.find({ }).toArray()
}

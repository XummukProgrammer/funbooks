
const ObjectId = require('mongodb').ObjectId
const DatabaseModule = require('../Modules/database-module.js')
const TokensModel = require('./tokens-model.js')

exports.create = async (userLogin, userPassword) => {
    const users = DatabaseModule.getUsers()
    await users.insertOne({ 
        'login': userLogin,
        'password': userPassword
    })
}

exports.get = async (id) => {
    const users = DatabaseModule.getUsers()
    return await users.findOne({ _id: new ObjectId(id) })
}

exports.getByLoginAndPassword = async (login, password) => {
    const users = DatabaseModule.getUsers()
    return await users.findOne({
        'login': login,
        'password': password
    });
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

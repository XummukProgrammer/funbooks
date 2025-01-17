const ObjectId = require('mongodb').ObjectId
const DatabaseModule = require('../modules/database-module.js')

exports.create = async (userId) => {
    const tokens = DatabaseModule.getTokens()
    return await tokens.insertOne({
        'userId': new ObjectId(userId)
    })
}

exports.getUserId = async (id) => {
    const tokens = DatabaseModule.getTokens()
    const token = await tokens.findOne({
        '_id': new ObjectId(id)
    })
    
    if (token) {
        return token['userId']
    }

    return null
}

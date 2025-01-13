const UsersModel = require('./users-model.js')
const DatabaseModule = require('../Modules/database-module.js')

exports.create = async (tokenId, text) => {
    const user = await UsersModel.getByTokenId(tokenId)
    if (user) {
        const books = DatabaseModule.getBooks()
        await books.insertOne({
            'userId': user['_id'],
            'text': text
        })
        return true
    }
    return false
}

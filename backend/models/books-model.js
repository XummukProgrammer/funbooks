const UsersModel = require('./users-model.js')
const DatabaseModule = require('../Modules/database-module.js')

exports.create = async (tokenId, categoryId, text, tags) => {
    const user = await UsersModel.getByTokenId(tokenId)
    if (user) {
        const books = DatabaseModule.getBooks()
        await books.insertOne({
            'userId': user['_id'],
            'categoryId': categoryId,
            'text': text,
            'tags': tags
        })
        return true
    }
    return false
}

const ObjectId = require('mongodb').ObjectId
const UsersModel = require('./users-model.js')
const TagsModel = require('./tags-model.js')
const DatabaseModule = require('../Modules/database-module.js')

exports.create = async (tokenId, categoryId, text, _tags) => {
    var tags = []
    _tags.forEach(element => {
        tags.push(new ObjectId(element))
    });

    const user = await UsersModel.getByTokenId(tokenId)
    if (user) {
        const books = DatabaseModule.getBooks()
        await books.insertOne({
            'userId': user['_id'],
            'categoryId': new ObjectId(categoryId),
            'ratingId': await TagsModel.getRatingId(_tags),
            'text': text,
            'tags': tags
        })
        return true
    }
    return false
}

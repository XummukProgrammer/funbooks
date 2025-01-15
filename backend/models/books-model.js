const ObjectId = require('mongodb').ObjectId
const UsersModel = require('./users-model.js')
const TagsModel = require('./tags-model.js')
const DatabaseModule = require('../modules/database-module.js')

exports.create = async (userId, categoryId, tags, characters) => {
    const books = DatabaseModule.getBooks()
    await books.insertOne({
        'userId': userId,
        'categoryId': new ObjectId(categoryId),
        'ratingId': await TagsModel.getRatingId(tags),
        'tags': tags,
        'characters': characters
    })
}

exports.get = async (id) => {
    const books = DatabaseModule.getBooks()
    return await books.findOne({
        '_id': new ObjectId(id)
    })
}

exports.has = async (id) => {
    return await this.get(id) != null
}

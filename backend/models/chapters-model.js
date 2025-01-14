const ObjectId = require('mongodb').ObjectId
const DatabaseModule = require('../Modules/database-module.js')

exports.create = async (bookId, title, text) => {
    const categories = DatabaseModule.getChapters()
    return await categories.insertOne({
        'bookId': new ObjectId(bookId),
        'title': title,
        'text': text
    })
}

exports.getById = async (id) => {
    const categories = DatabaseModule.getChapters()
    return await categories.findOne({
        '_id': new ObjectId(id)
    })
}

exports.getByBookId = async (bookId) => {
    const categories = DatabaseModule.getChapters()
    return await categories.find({
        'bookId': new ObjectId(bookId)
    }).toArray()
}

exports.getAll = async () => {
    const categories = DatabaseModule.getChapters()
    return await categories.find({ }).toArray()
}

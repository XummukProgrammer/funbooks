const ObjectId = require('mongodb').ObjectId
const DatabaseModule = require('../Modules/database-module.js')

exports.create = async (name) => {
    const categories = DatabaseModule.getCharacters()
    return await categories.insertOne({
        'name': name
    })
}

exports.get = async (id) => {
    const categories = DatabaseModule.getCharacters()
    return await categories.findOne({
        '_id': new ObjectId(id)
    })
}

exports.getAll = async () => {
    const categories = DatabaseModule.getCharacters()
    return await categories.find({ }).toArray()
}

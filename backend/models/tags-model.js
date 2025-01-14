const ObjectId = require('mongodb').ObjectId
const DatabaseModule = require('../Modules/database-module.js')

exports.create = async (name) => {
    const tags = DatabaseModule.getTags()
    return await tags.insertOne({
        'name': name
    })
}

exports.getFromId = async (id) => {
    const tags = DatabaseModule.getTags()
    return await tags.findOne({
        '_id': new ObjectId(id)
    })
}

exports.getFromName = async (name) => {
    const tags = DatabaseModule.getTags()
    return await tags.findOne({
        'name': name
    })
}

exports.getAll = async () => {
    const tags = DatabaseModule.getTags()
    return await tags.find({ }).toArray()
}

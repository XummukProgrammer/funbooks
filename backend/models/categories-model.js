const ObjectId = require('mongodb').ObjectId
const DatabaseModule = require('../modules/database-module.js')

exports.create = async (name, directionId) => {
    const categories = DatabaseModule.getCategories()
    return await categories.insertOne({
        'name': name,
        'directionId': new ObjectId(directionId)
    })
}

exports.get = async (id) => {
    const categories = DatabaseModule.getCategories()
    return await categories.findOne({
        '_id': new ObjectId(id)
    })
}

exports.has = async (id) => {
    return await this.get(id) != null
}

exports.getAll = async () => {
    const categories = DatabaseModule.getCategories()
    return await categories.find({ }).toArray()
}

const ObjectId = require('mongodb').ObjectId
const DatabaseModule = require('../Modules/database-module.js')

exports.create = async (name, factor) => {
    const categories = DatabaseModule.getRatings()
    return await categories.insertOne({
        'name': name,
        'factor': Number(factor)
    })
}

exports.get = async (id) => {
    const categories = DatabaseModule.getRatings()
    return await categories.findOne({
        '_id': new ObjectId(id)
    })
}

exports.getFromIds = async (ids) => {
    const output = []
    for (const id of ids) {
        output.push(await this.get(id))
    }
    return output
}

exports.getAll = async () => {
    const categories = DatabaseModule.getRatings()
    return await categories.find({ }).toArray()
}

exports.getRatingIdByTags = async (tags) => {
    const data = await this.getFromIds(tags)
    return data.reduce((prev, next) => prev.factor > next.factor ? prev : next)._id
}

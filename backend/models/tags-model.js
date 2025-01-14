const ObjectId = require('mongodb').ObjectId
const DatabaseModule = require('../Modules/database-module.js')
const RatingsModel = require('./ratings-model.js')

exports.create = async (name, ratingId) => {
    const tags = DatabaseModule.getTags()
    return await tags.insertOne({
        'name': name,
        'ratingId': new ObjectId(ratingId)
    })
}

exports.getFromId = async (id) => {
    const tags = DatabaseModule.getTags()
    return await tags.findOne({
        '_id': new ObjectId(id)
    })
}

exports.getFromIds = async (ids) => {
    const output = []
    for (const id of ids) {
        output.push(await this.getFromId(id))
    }
    return output
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

exports.getRatingId = async (tags) => {
    var data = []
    var output = await this.getFromIds(tags)
    for (const element of output) {
        data.push(element.ratingId)
    }
    return await RatingsModel.getRatingIdByTags(data)
}

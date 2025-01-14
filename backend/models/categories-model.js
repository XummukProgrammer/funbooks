const DatabaseModule = require('../Modules/database-module.js')

exports.create = async (name) => {
    const categories = DatabaseModule.getCategories()
    return await categories.insertOne({
        'name': name
    })
}

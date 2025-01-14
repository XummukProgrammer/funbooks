const CategoriesModel = require('../models/categories-model.js')

exports.create = async (request, response) => {
    const name = request.body.name

    const category = await CategoriesModel.create(name)

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        'data': {
            'categoryId': category['insertedId']
        },
        'error': ''
    }))
}
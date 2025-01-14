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

exports.get = async (request, response) => {
    const id = request.params.id

    const category = await CategoriesModel.get(id)

    response.setHeader('Content-Type', 'application/json');

    if (category) {
        response.end(JSON.stringify({
            'data': {
                'category': category
            },
            'error': ''
        }))
    } else {
        response.end(JSON.stringify({
            'error': 'Category not found'
        }))
    }
}

exports.getAll = async (request, response) => {
    const categories = await CategoriesModel.getAll()

    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify({
        'data': {
            'categories': categories
        },
        'error': ''
    }))
}

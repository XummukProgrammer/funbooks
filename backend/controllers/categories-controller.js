const CategoriesModel = require('../models/categories-model.js')

exports.create = async (request, response) => {
    const form = request.body
    if (!form.name) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const name = form.name

    const category = await CategoriesModel.create(name, request.direction._id)

    response.json({
        'data': {
            'categoryId': category['insertedId']
        },
        'success': true
    })
}

exports.get = async (request, response) => {
    const id = params.id
    const category = await CategoriesModel.get(id)

    if (category) {
        response.json({
            'data': {
                'category': category
            },
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'Category not found.'
        })
    }
}

exports.getAll = async (request, response) => {
    const categories = await CategoriesModel.getAll()

    response.json({
        'data': {
            'categories': categories
        },
        'success': true
    })
}

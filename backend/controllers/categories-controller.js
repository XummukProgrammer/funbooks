const CategoriesModel = require('../models/categories-model.js')
const DirectionsModel = require('../models/directions-model.js')

exports.create = async (request, response) => {
    const form = request.body
    if (!form.name || !form.directionId) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    const name = form.name
    const directionId = form.directionId

    if (!await DirectionsModel.has(directionId)) {
        return response.json({
            'success': false,
            'error': 'The direction was not found.'
        })
    }

    const category = await CategoriesModel.create(name, directionId)

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

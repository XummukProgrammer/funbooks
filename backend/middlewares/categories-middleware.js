const CategoriesModel = require('../models/categories-model.js')

async function getCategory(categoryId, request, response, next) {
    const category = await CategoriesModel.get(categoryId)
    if (!category) {
        return response.json({
            'success': false,
            'error': 'The category was not found.'
        })
    }
    request.category = category
    next()
}

async function getCategoryGet(request, response, next) {
    const categoryId = request.params.categoryId
    await getCategory(categoryId, request, response, next)
}

async function getCategoryPost(request, response, next) {
    const form = request.body
    if (!form.categoryId) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }
    const categoryId = form.categoryId
    await getCategory(categoryId, request, response, next)
}

exports.getCategory = async (request, response, next) => {
    if (request.method == 'GET') {
        return getCategoryGet(request, response, next)
    } else if (request.method == 'POST') {
        return getCategoryPost(request, response, next)
    }
}

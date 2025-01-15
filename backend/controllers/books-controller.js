const isJSON = require('is-json')
const BooksModel = require('../models/books-model.js')
const CategoriesModel = require('../models/categories-model.js')
const TagsModel = require('../models/tags-model.js')
const CharactersModel = require('../models/characters-model.js')

async function getTagsFromForm(form) {
    const jsonTags = JSON.parse(form.tags)
    var tags = []
    for (const id of jsonTags) {
        const tag = await TagsModel.getFromId(id)
        if (tag) {
            tags.push(tag._id)
        }
    }
    return tags
}

async function getCharactersFromForm(form) {
    const jsonCharacters = JSON.parse(form.characters)
    var characters = []
    for (const id of jsonCharacters) {
        const character = await CharactersModel.get(id)
        if (character) {
            characters.push(character._id)
        }
    }
    return characters
}

exports.create = async (request, response) => {
    const form = request.body
    if (!form.categoryId || !form.tags || !form.characters) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }

    if (!isJSON.strict(form.tags) || !isJSON.strict(form.characters)) {
        return response.json({
            'success': false,
            'error': 'The tags or characters parameters are not a valid JSON string.'
        })
    }

    const categoryId = form.categoryId

    if (!await CategoriesModel.has(categoryId)) {
        return response.json({
            'success': false,
            'error': 'Category was not found.'
        })
    }

    const tags = await getTagsFromForm(form)
    const characters = await getCharactersFromForm(form)

    const success = await BooksModel.create(tokenId, categoryId, tags, characters)

    if (success) {
        response.json({
            'success': true
        })
    } else {
        response.json({
            'success': false,
            'error': 'It is impossible to create a book.'
        })
    }
}

const ChaptersModel = require('../models/chapters-model.js')

async function getChapter(chapterId, request, response, next) {
    const chapter = await ChaptersModel.getById(chapterId)
    if (!chapter) {
        return response.json({
            'success': false,
            'error': 'The chapter was not found.'
        })
    }
    request.chapter = chapter
    next()
}

async function getChapterGet(request, response, next) {
    const chapterId = request.params.chapterId
    await getChapter(chapterId, request, response, next)
}

async function getChapterPost(request, response, next) {
    const form = request.body
    if (!form.chapterId) {
        return response.json({
            'success': false,
            'error': 'The parameters were passed incorrectly.'
        })
    }
    const chapterId = form.chapterId
    await getChapter(chapterId, request, response, next)
}

exports.getChapter = async (request, response, next) => {
    if (request.method == 'GET') {
        return getChapterGet(request, response, next)
    } else if (request.method == 'POST') {
        return getChapterPost(request, response, next)
    }
}

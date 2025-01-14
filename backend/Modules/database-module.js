const MongoDB = require('mongodb')

const IP_PORT = 'mongodb://127.0.0.1:27017/'
const DB_NAME = 'funbooks'
const USERS_COLLECTION = 'users'
const TOKENS_COLLECTION = 'tokens'
const BOOKS_COLLECTION = 'books'
const TAGS_COLLECTION = 'tags'
const CATEGORIES_COLLECTION = 'categories'
const DIRECTIONS_COLLECTION = 'directions'
const RATINGS_COLLECTION = 'ratings'

const client = new MongoDB.MongoClient(IP_PORT);
var app = null

exports.connect = async (_app) => {
    app = _app

    try {
        await client.connect()
        app.locals.users = this._getUsers()
        app.locals.tokens = this._getTokens()
        app.locals.books = this._getBooks()
        app.locals.tags = this._getTags()
        app.locals.categories = this._getCategories()
        app.locals.directions = this._getDirections()
        app.locals.ratings = this._getRatings()
    } catch(error) {
        return console.log(error)
    }
}

exports.close = async() => {
    await client.close()
}

exports.get = () => {
    return client.db(DB_NAME)
}

exports.getUsers = () => {
    return app.locals.users
}

exports.getTokens = () => {
    return app.locals.tokens
}

exports.getBooks = () => {
    return app.locals.books
}

exports.getTags = () => {
    return app.locals.tags
}

exports.getCategories = () => {
    return app.locals.categories
}

exports.getDirections = () => {
    return app.locals.directions
}

exports.getRatings = () => {
    return app.locals.ratings
}

exports._getUsers = () => {
    return this.get().collection(USERS_COLLECTION)
}

exports._getTokens = () => {
    return this.get().collection(TOKENS_COLLECTION)
}

exports._getBooks = () => {
    return this.get().collection(BOOKS_COLLECTION)
}

exports._getTags = () => {
    return this.get().collection(TAGS_COLLECTION)
}

exports._getCategories = () => {
    return this.get().collection(CATEGORIES_COLLECTION)
}

exports._getDirections = () => {
    return this.get().collection(DIRECTIONS_COLLECTION)
}

exports._getRatings = () => {
    return this.get().collection(RATINGS_COLLECTION)
}

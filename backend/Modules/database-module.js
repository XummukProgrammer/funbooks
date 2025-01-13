const MongoDB = require('mongodb')

const IP_PORT = 'mongodb://127.0.0.1:27017/'
const DB_NAME = 'funbooks'
const USERS_COLLECTION = 'users'
const TOKENS_COLLECTION = 'tokens'

const client = new MongoDB.MongoClient(IP_PORT);
var app = null

exports.connect = async (_app) => {
    app = _app

    try {
        await client.connect()
        app.locals.users = this._getUsers()
        app.locals.tokens = this._getTokens()
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

exports._getUsers = () => {
    return this.get().collection(USERS_COLLECTION)
}

exports._getTokens = () => {
    return this.get().collection(TOKENS_COLLECTION)
}

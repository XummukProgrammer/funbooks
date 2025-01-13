const MongoDB = require('mongodb')

const IP_PORT = 'mongodb://127.0.0.1:27017/'
const DB_NAME = 'funbooks'
const USERS_COLLECTION = 'users'

const client = new MongoDB.MongoClient(IP_PORT);

exports.connect = async () => {
    try {
        await client.connect()
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
    return this.get().collection(USERS_COLLECTION)
}

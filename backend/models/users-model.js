
const DatabaseModule = require('../Modules/database-module.js')

exports.add = async (userLogin, userPassword) => {
    const users = DatabaseModule.getUsers()
    await users.insertOne({ 
        'login': userLogin,
        'password': userPassword
     })
}

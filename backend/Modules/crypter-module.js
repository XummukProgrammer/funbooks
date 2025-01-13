const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10

exports.generate = async (data) => {
    const hash = await bcrypt.hash(data, SALT_ROUNDS);
    return hash
}

exports.check = async (data, hash) => {
    return await bcrypt.compare(data, hash)
}

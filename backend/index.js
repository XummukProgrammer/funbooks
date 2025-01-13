const express = require('express')
const DatabaseModule = require('./Modules/database-module.js')
const ApiRouter = require('./routes/api-router.js')

const app = express()

const PORT = process.env.port || 3010;

(async () => {
    await DatabaseModule.connect()

    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
    })
})()

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

app.use('/api', ApiRouter.get())

process.on('SIGINT', async () => {
    await DatabaseModule.close()
    process.exit()
})

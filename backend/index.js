const express = require('express')

const app = express()

const PORT = process.env.port || 3010

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

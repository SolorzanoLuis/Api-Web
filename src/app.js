const express = require('express');
require('./db/mongoose')

const userRouter = require('./routers/user')
const productRouter =  require('./routers/product')
const clientRouter = require('./routers/client')

const app = express()

app.use( express.json() )
app.use(userRouter)
app.use(productRouter)
app.use(clientRouter)


module.exports = app
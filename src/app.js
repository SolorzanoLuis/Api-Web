const express = require('express');
require('./db/mongoose')
var cors = require('cors')

const userRouter = require('./routers/user')
const productRouter =  require('./routers/product')
const clientRouter = require('./routers/client')

const app = express()
const options = cors.CorsOptions = {
    origin: '*'
};

app.use( express.json() )
app.use(cors(options));
app.use(userRouter)
app.use(productRouter)
app.use(clientRouter)



module.exports = app
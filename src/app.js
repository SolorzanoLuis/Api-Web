const express = require('express');
require('./db/mongoose')
const cors = require('cors');
// require('./db/populateData');


const userRouter = require('./routers/user')
const productRouter =  require('./routers/product')
const clientRouter = require('./routers/client')
const employeeRouter = require('./routers/employee')
const hierarchyRouter = require('./routers/hierarchy')
const usersRouter = require('./routers/users');
const catalogsRouter = require('./routers/catalogs');
const branchRouter = require('./routers/branch');
const neighborhoodRouter = require('./routers/neighborhood');

const app = express()
const options = cors.CorsOptions = {
    origin: '*'
};

app.use(express.json({limit: '1mb'}))
app.use(cors(options));
app.use(userRouter)
app.use(productRouter)
app.use(clientRouter)
app.use(employeeRouter)
app.use(hierarchyRouter)
app.use(usersRouter)
app.use(catalogsRouter)
app.use(branchRouter)
app.use(neighborhoodRouter)


module.exports = app
//importação do express
const express = require('express')
const routes = require('./routes')
require('./database')

//chamamos a função do express e definimos em uma constante
const app = express()
app.use(express.json()) // lidar com json
app.use(routes)


app.listen(3000)
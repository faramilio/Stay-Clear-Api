//importação do express
const express = require('express')
const routes = require('./routes')

//chamamos a função do express e definimos em uma constante
const app = express()

app.use(routes)


app.listen(3000)
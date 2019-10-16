const express = require('express')

const routes = express.Router()

const User = require('./app/models/User')
//GET trazer algo
//post Cadastrar algo
//PUT Atualizar algo


routes.post('/user', async (req, res) =>{
    const user = await User.create(req.body)
    return res.json(user)
})

routes.get('/user', (req, res) => {
    return res.json(
        {
            usuario: 'Anderson Giovani Faramilio',
            idade: 26,
            profissao: 'Tecnico em informatica',
            amigos: ['Juju', 'Japa','Anderson','Tinder','Motuca','Jose Serra', 'Patricia','Macela','juninho'],
            Ativo: false,
        }
    )
})
//rota inicial
routes.get('/', (req,res) => {
    return res.send('Olá Mundo')
})
//parametros
routes.get('/users/:fruta',(req, res)=>{
    const name = req.params.name
    return res.send(name)
})
module.exports = routes
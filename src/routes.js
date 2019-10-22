const express = require('express')
const routes = express.Router()

//Nossos controllers
const UserController = require('./app/controllers/UserController')
const AuthController = require('./app/controllers/AuthController')

//Nossos middlewares
const AuthMiddleware = require('./app/middlewares/AuthMiddleware')

/**
 * MÉTODOS HTTP
 * GET = Trazer algo
 * POST = Cadastrar algo
 * PUT = Atualizar algo
 * DELETE = Apagar algo
 */

//************* */ NOSSAS ROTAS*******************************
routes.post('/users', UserController.store) //Rota de cadastro de usuários
routes.post('/auth', AuthController.store) //Rota de autenticação

routes.use(AuthMiddleware)


routes.get('/users', UserController.index) //Rota de retorno de usuários


// routes.post('/categories', async (req, res)=>{
//     const categories = await Categories.create(req.body)
//     return res.json(categories)
// })





// routes.post('/user', async (req, res) =>{
//     const user = await User.create(req.body)
//     return res.json(user)
// })

// routes.get('/user', (req, res) => {
//     return res.json(
//         {
//             usuario: 'Anderson Giovani Faramilio',
//             idade: 26,
//             profissao: 'Tecnico em informatica',
//             amigos: ['Juju', 'Japa','Anderson','Tinder','Motuca','Jose Serra', 'Patricia','Macela','juninho'],
//             Ativo: false,
//         }
//     )
// })
// //rota inicial
// routes.get('/', (req,res) => {
//     return res.send('Olá Mundo')
// })
// //parametros
// routes.get('/users/:fruta',(req, res)=>{
//     const name = req.params.name
//     return res.send(name)
// })
module.exports = routes
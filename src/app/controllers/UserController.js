const { Op } = require('sequelize')
const User = require('../models/User')

class UserController{

    // GET => Me retorna todos os usuários
    async index(req,res) {
        const users = await User.findAll( { where:
        {
            id : {
                [Op.ne] : req.userId

            }
        }
    })
        return res.json(users)

    } 

async store(req, res) {
     //Verificando se já existe uma conta com esse e-mail
     const userExists = await User.findOne({ where: { email: req.body.email} });

     //Se o usuário existir ele cai dentro do if
     if(userExists){
         return res.json({ error: "Usuário já existe"})
     }

     //Verifica se o usuario digitou uma senha de 6 caracteres
     //123456 => 6
     if(req.body.password.length < 5){
         return res.json({ error: "Senha deve ter no mínimo 6 caracteres"})
     }

     const user = await User.create(req.body)
     
     return res.json(user)
 } 
   

 update() {} //PUT => Alteramos alguma informação do usuário
 delete() {} //DELETE => Deleta um usuário
}

module.exports = new UserController()
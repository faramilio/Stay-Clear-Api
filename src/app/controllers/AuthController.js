const jwt = require('jsonwebtoken')
const User = require('../models/User')

class AuthController{
    async store(req,res){

         //Verificando se já existe uma conta com esse e-mail
        const userExists = await User.findOne({ where: { email: req.body.email} });
        
        //Operador NOT(!), Se o resultado for verdadeiro,, ele retorna falso
        if(!userExists){
            return res.json({ error: "Usuário não possui cadastro na aplicação" })
        }

        //Verificando a senha do usuário
        if(req.body.password !== userExists.password){
            return res.json({ error: "Senha incorreta" })

        }

        return res.json({
            userExists,
            token: jwt.sign({ id: userExists.id}, '8e6edd0ffe9d90025fd73ce4904007b0', {
                expiresIn: '7d'
            })
        })
    }
}

module.exports = new AuthController
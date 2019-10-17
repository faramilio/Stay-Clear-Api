const User = require('../models/User')
class UserController{

    index(){} //GET => me retorna todos usuarios
    show(){} // GET => me retorna um usuario
    async store(req, res){
        const user = await User.create(req.body)
        return res.json(user)} //POST => criamos usuario
    update(){} //PUT => Alteramos alguma informação do usuario
    delete(){}

}
module.exports = new UserController()
const jwt = require('jsonwebtoken')
module.exports = async(req, res, next) => {
    const authHeader = req.headers.authorization

    //Operador NOT(!), inverte os valores
    if(!authHeader){
        return res.json({error: "Token não informado"})

    }
    //separamos nosso token entre hash e bearer pelo ' '
    const [bearer, token] = authHeader.split(' ')

    try {
        //descriptografando osso token
        const decoded = jwt.verify(token, '8e6edd0ffe9d90025fd73ce4904007b0');
        //passando nosso ID para nossa aplicação
        req.userId = decoded.id

        return next()
  
      } catch(err) {
          console.log( err )
        


    //return next()
      }
    }
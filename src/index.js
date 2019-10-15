//importação do express
const express = require('express')

//chamamos a função do express e definimos em uma constante
const app = express()

app.get('/user', (req, res) => {
    return res.json(
        {
            usuario: 'Anderson Giovani Faramilio',
            idade: 26,
            profissao: 'Tecnico em informatica',
            amigos: ['Juju', 'Japa','Anderson','Tinder','Motuca','Jose Serra', 'Patricia','Macela' ],
            Ativo: false,
        }
    )
})
// iniciando aplicativo
app.listen(3000)
//carregar nossos model
const Sequelize = require('sequelize')
// configuração do nosso banco
const databaseConfig = require('../config/database')

const User = require('../app/models/User')

class Database {
    constructor(){
        this.init()
    }
    init(){
        this.connection = new Sequelize(databaseConfig)
        User.init(this.connection)
    }
}
module.exports = new Database()
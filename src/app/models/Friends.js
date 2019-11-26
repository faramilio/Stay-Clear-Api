const Sequelize = require('sequelize')
const {Model} = require('sequelize')
class Friend extends Model {
    static init(sequelize){
        super.init({
            id_usuario: Sequelize.INTEGER,
            id_friend: Sequelize.INTEGER
        },
        {
            sequelize
        }
        )
        
    }
}
module.exports = Friend
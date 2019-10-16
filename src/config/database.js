// configurações do nosso banco

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database:'stayclear',
    define: {
        timestamps: true, // cria created_at e update
        underscored: true, // ele altera o padrão de nome das tabelas para underscored
        underscoredAll: true //ele altera o padrão de nome das colunas para underscoredAll
    }
}
const db = require("./DB")

// const Usuario = DB.sequelize.define('usuarios',{
//  Titulo:{
//    type: DB.sequelize.STRING
//  },
//  Conteudo:{
//    type: DB.sequelize.TEXT
//  }
//})

const Usuario = db.sequelize.define('usuarios',{
    Titulo: db.Sequelize.STRING,
    Conteudo: db.Sequelize.TEXT
})

module.exports = Usuario
//Usuario.sync({force: true})

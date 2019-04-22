const Sequelize = require('sequelize')
const sequelize = new Sequelize('buildinvest', 'buildinvest', 'vascogama',{
      host: "Localhost",
      dialect: "mysql"

})

sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!");

}).catch(function(erro){
    console.log("Falha ao se conectar " + erro);
})

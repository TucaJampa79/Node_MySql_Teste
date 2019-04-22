// Importando o Express(Servidor) e o HandleBars(Engine de layouts)
// Importando o Body-parser para tratamento de dados de formulario
const express = require('express');
const app = express();
const handlebars  = require('express-handlebars')
const bodyparser = require('body-parser')
const Usuario = require('./models/Usuario')


// Config
//Template Engine
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Body parser configurações
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

// rota
//Principal

app.get('/',function(req,res){
  Usuario.all().then(function(Usuarios){
    res.render('home',{Usuarios:Usuarios})
  })

})

app.get('/cadastro',function(req,res){
  res.render('formulario')
})

app.post('/add',function(req,res){
  Usuario.create({
    Titulo: req.body.Titulo,
    Conteudo: req.body.conteudo
  })
  .then(function(){
    res.send("Cadastro Realizado com Sucesso!")
  }).catch(function(erro){
    res.send("Erro no cadastro: "+ erro)
  })
})

app.listen(7000, function(){
  console.log('Servidor No Ar na URL http://localhost:7000');

});

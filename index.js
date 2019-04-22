const express = require('express');
const app = express();

// Rota
app.get("/",function(req,res){
  res.sendfile(__dirname + "/html/sobre.html")
})

// Rota
app.get("/Sobre",function(req,res){
  res.send("Minha Pagina Sobre")
})

// Rota
app.get("/Blog",function(req,res){
  res.send("Seja Bem vindo ao Meu Blog!")
})

// Rotas com Parâmetros
app.get("/ola/:nome/:prof",function(req,res){
  res.send("<h1> olá " + req.params.nome + " </h1>" + "<h2> Seu Professor é " + req.params.prof + " </h2>" )
})

app.listen(7000, function(){
  console.log('Servidor No Ar na URL http://localhost:7000');

});

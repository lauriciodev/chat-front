const express = require("express");
const app = express();
const ejs = require("ejs");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const axios = require("axios");

app.set("view engine", "ejs");

app.get("/",(req,res) =>{
  res.render("home");
})

io.on("connection", socket =>{

   //tratando evento de desconexão
   socket.on("disconnect", data => {
    io.on("off",resp =>{
      console.log(test);
    });
  });
  
socket.on("mensagem", mensagem =>{
  setTimeout(() =>{
    io.emit("resposta", "");
  },500)

});


})

http.listen(8080,(erro) =>{
if(erro){
console.log(erro);
}else{
console.log("servidor iniciado com sucesso");
}
})



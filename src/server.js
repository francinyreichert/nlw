//Servidor
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pageSuccess
} = require("./pages")

//configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server, 
    noCache: true,
})

// início e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.get('/page-success', pageSuccess)
// start do servidor
.listen(5500, ()=>{
    console.log("Listening on port http://localhost:5500")
})
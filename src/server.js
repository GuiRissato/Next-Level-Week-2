// servidor
const express = require('express')
 const server = express()
 const nunjucks = require('nunjucks')
 const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//  configurar o nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})
// inicio e configuracao do servidor
server
// receber os dados do req.body
// jeito para esconder os dados recebidos e nao ficar aquela url gigantesca
.use(express.urlencoded({extended:true}))
// configuracao do servidor para ver as pastas para o funcionamento das imagens e dos css
.use(express.static("public"))
// rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5500)
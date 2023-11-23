const express = require("express")

const app = express()

app.get("/", (req,res)=>{
    // ; OBS: Quando utilizamos o handlebars é utilizada a função render para que a página desejada seja exibida no navegador

    res.render('home')
})

app.listen(3000,()=>{
    console.log("servidor rodando na porta")
})

// --Configurando o HANDLEBARS
const exphbs = require("express-handlebars")

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


// Definindo a pasta public como a pasta que guarda arquivos como o CSS:

app.use(express.static("public"))

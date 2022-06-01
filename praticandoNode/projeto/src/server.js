const gate = 3003

const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
const bancodeDados = require ('./bancodeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos',(req, res, next) => {
   res.send(bancodeDados.getProdutos())
})

app.get('/produtos/:id',(req, res, next) => {
    res.send(bancodeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancodeDados.salvarProduto({
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)//json
})


app.put('/produtos/:id', (req, res, next) => {
    const produto = bancodeDados.salvarProduto({
        id: req.params.id,
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)//json
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancodeDados.excluirProduto(req.params.id)
    res.send(produto)//json
})

app.listen(gate, () =>{
    console.log(`Servidor executando na porta ${gate}.`)
})
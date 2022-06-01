Array.prototype.map2 = function(callback) {
    novaMatriz = []
    for (let i = 0; i < this.length; i++){
        novaMatriz.push(callback(this[i], i ,this))
    }
    return novaMatriz
}


const carrinho =  [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

//retornar um array apenas com preços

const jsonPobjeto = json => JSON.parse(json)
const totalCompra = produto => produto.preco

const resultado = carrinho.map2 (jsonPobjeto).map2(totalCompra)
console.log(resultado)

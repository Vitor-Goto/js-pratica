const carrinho =  [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

//retornar um array apenas com preços

const jsonPobjeto = json => JSON.parse(json)
const totalCompra = produto => produto.preco

const resultado = carrinho.map (jsonPobjeto).map(totalCompra)
console.log(resultado)

console.log (typeof JSON)
function criarProduto(nome, preço ) {
    return{
        nome,
        preço,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook',2199.99))
console.log(criarProduto('iPad', 8999.99))
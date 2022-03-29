const soma = function (x , y) {
    return x + y
}

const imprimierResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimierResultado (3, 4)
imprimierResultado(3, 4, soma)
imprimierResultado( 3, 4, function(x,y) {
    return x - y
})
imprimierResultado (3, 4, (x, y)=> x * y)

const pessoa = {
    falar: function(){
        console.log ('opa')
    }
} 

pessoa.falar()
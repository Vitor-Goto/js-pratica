function soma() {
    let soma = 0
    for(i in arguments){                 //arguments pode acessar arrays vazios
        soma += arguments[i]

    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma (1.1,2.2,3.3))
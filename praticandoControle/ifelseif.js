Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if (nota.entre(9, 10)) {
        console.log ('quadro de honra')
    } else if (nota.entre(7,8.99)) {
        console.log('aprovado')
    } else if (nota.entre(0,6.99)) {
         console.log('recuperação')
    } else {
        console.log ('nota invalida')
    } 
        console.log('fim')

}
imprimirResultado(10)
imprimirResultado(6)
imprimirResultado(7)
imprimirResultado('sexo')
//3) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. 

//metodo antigo

function calculoExpoente (x , y){
    resultado = Math.pow (x, y)

    return resultado
}

//metodo novo 

function calculoExpoente2(x, y) {
    resultado2 = (x**y)
    
    return resultado2
}

console.log(calculoExpoente(2,4))
console.log(calculoExpoente2(2, 5))
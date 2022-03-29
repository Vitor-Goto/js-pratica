console.log(soma(4,4)) //function declaration pode ser chamada antesmesmo da declaração 
//o interpretador js carrega todas as function declaration, o mesmo NÃO ocorre com as outras formas


//function declaration
function soma (x,y){
    return x + y
}
console.log(soma (2, 2))

//function expression
const sub = function(x, y) {
    return x - y
}

console.log(sub(2,2))

//named function expression

const mult = function mult (x, y) {
    return x * y
}
console.log(mult(2,2))

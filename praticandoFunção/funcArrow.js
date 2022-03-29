let dobro = function (a) { 
    return 2 * a
}

dobro = (a) => { 
    return 2 * a
}

dobro = a => 2 * a //o return está implicito na função arrow escrevendo desta forma
console.log(dobro(Math.PI))

let ola = function() {
    return 'olá'
}

ola = () => "olá"
//ola = _ => 'olá' //_ é um parametro
console.log(ola())

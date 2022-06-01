let p = new Promise(function(resolve){
    resolve(['zap', 'Telegram', 'kwai'])
})
 
function primeiroElemento(array) {
   return array [0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMaiuscula = letra => letra.toUpperCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMaiuscula)
    .then(console.log)
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')


const chineses = f => f.pais ==='China'
const mulheres = f => f.genero === 'F'
const Menorsalario = (func, funcAtual) => {
    return func.salaraio < funcAtual.salaraio ? func : funcAtual
}

axios.get (url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(Menorsalario)
    
console.log(func)  
})

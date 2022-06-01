function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        }else {
            resolve(valor)
        }
    })
}

funcionarOuNao('testando...', 0.1)
    .then (v => console.log(`valor: ${v}`))
    .then (
        v => consol.log(v),
        erro => console.log(`erro esp : ${erro}`)
    )
    .then(() => console.log('Quase fim') ) 
    .catch(erro => console.log(`Erro ${erro}`))
    .then(() => console.log( 'Fim!'))
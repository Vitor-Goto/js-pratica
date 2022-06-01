function gerarNumerosEntre (min, max, numerosRepetidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise ((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosRepetidos.includes(aleatorio)) {
            reject ('Numero Repetido!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena (quantNum) {

    const numeros = []
    for (let _ of Array(quantNum).fill()) {
       numeros.push (await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)

let stringPont = "12, 40, 0, 1, 10, 15, 12, 18, 33"


function comparaRecord (stringPont) {
    let pontuacoes = stringPont.split (', ')
    let quantQubraRecord = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes [0]
    let menorPontuacao = pontuacoes  [0]

    for(let contador = 1; contador< pontuacoes.length; contador++) {
        if(pontuacoes[contador]> maiorPontuacao) {
            maiorPontuacao = pontuacoes [contador]
            quantQubraRecord++
        }else if (pontuacoes[contador]<menorPontuacao) {
            menorPontuacao = pontuacoes[contador]
            piorJogo = contador + 1
        }
    }
    return [quantQubraRecord, piorJogo]

}
console.log (comparaRecord(stringPont))

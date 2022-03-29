/**06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos.  */

function JurosSimples (capInicial, taxaJuros , Tempoaplic) {
    const juros = capInicial * taxaJuros * Tempoaplic
    const montante = capInicial + juros
    console.log(`seu montante é: ${montante}`)
}

JurosSimples(1200, 0.02, 14)

function JurosCompostos (capInicial2, TaxaJuros2, TempoAplic2){
    const montante2 = capInicial2 *(1 + TaxaJuros2)**TempoAplic2
    console.log(`seu montante é: ${montante2}`)
}

JurosCompostos(1200, 0.02, 14)
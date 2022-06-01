class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }    
}

class Ciclo {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
    lancamentos.forEach (l => this.lancamentos.push(l))
    }

    sumario (){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento ('Salario', 100)
const contaDeluz = new Lancamento ('Luz', -20)
const aluguel = new Lancamento ('aluguel', -30)

const contas = new Ciclo (6,2018)
const contas2 = new Ciclo (7,2018)
const contas3 = new Ciclo (8,2018)
contas.addLancamentos(salario,contaDeluz,aluguel)
console.log (contas.sumario(), contas2.sumario(),contas3.sumario())
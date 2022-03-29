class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('joão')
p1.falar()
////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////

function Pessoa2 (nome2) {
    this.nome2 = nome2

    this.getnome2 = function(){
        return nome2
    }
    this.falarei = function (){
        console.log(`meu nome é ${this.nome2}`)
    }
}

const p3 = new Pessoa2 ('Vitor')
p3.falarei()

//fiquei uns 20 minutos até lembrar do this e o quão chato é você entender 100% o conceito dele em js
//estava escrevendo na linha 23 o seguinte
// falarei = (){
// console.log(`meu nome é ${this.nome2}`)
//} gerando um erro por conta do this

//notação literal
const obj1 = {
}
console.log(obj1)

//object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function produto(nome, preco, desc){
    this.nome = nome
    //this.preco = preco
    this.getPrecoComDesconto = () => {
        return preco *(1 - desc)
    }
}

const p1 = new produto ('Caneta', 7.99, 0.15)
const p2 = new produto ('Monitor', 2998.99, 0.25)
console.log (p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p1.preco)
console.log(p1.nome)


//função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Ana',11400, 1 )
console.log(f1.getSalario(), f2.getSalario())

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função que retorna objeto

const fromJSON = JSON.parse('{"info":"sou um JSON"}')
console.log(fromJSON.info)
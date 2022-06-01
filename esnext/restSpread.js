// operador ... 

//spread (espalhar)
const funcionario = { nome: 'Maria', salario: 1233.99}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//spread em array

const  grupoA = ['JOao','fulano', 'beleleu']
const grupoFInal = ['Maria', ...grupoA, 'tropinha']
console.log(grupoFInal)
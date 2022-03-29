//pessoa --->endereço do objeto --->{dados do objeto}
const pessoa = {nome : 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa )

//tentativa de mudar o endereço do objeto
//pessoa = {nome: 'Ana'}
//console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'maria'
console.log(pessoa.nome)

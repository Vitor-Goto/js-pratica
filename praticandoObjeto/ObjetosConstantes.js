//pessoa --->endereço do objeto --->{dados do objeto}
const pessoa = {nome : 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa )

//tentativa de mudar o endereço do objeto
//pessoa = {nome: 'Ana'}
//console.log(pessoa)

//congela todas as ações de um objeto nada do objeto irá mudar
Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'rua abc'
console.log(pessoa.nome)
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
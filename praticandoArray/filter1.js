const produtos = [ 
  {  nome : 'Notebook', preco: 2499, fragil: true},
  {nome: 'Ipad Pro', preco: 4199, fragil: true},
  {nome:'Copo de plastico', preco: 12.49, fragil: false},
  {nome: 'Copo de vidro', preco: 18.89, fragil : true}
]

console.log(produtos.filter(function(p){
     return false
}))


console.log(produtos.filter(function(p){
    return p.preco > 13
}))

console.log(produtos.filter(function(p){
    return p.nome == 'Notebook'
}))

console.log(produtos.filter(function(p){
    return p.fragil == false
}))
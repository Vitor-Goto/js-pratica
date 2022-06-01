const teconologias = new Map()
teconologias.set ('React', {framework: false})
teconologias.set('angulas', {framework: true})

console.log(teconologias.react)
console.log(teconologias.get('React').framework)

const chavesVariadas = new Map([
    [function (){ }, 'Função'],
    [{}, 'Objeto'],
    [123,'Número'],
])

chavesVariadas.forEach
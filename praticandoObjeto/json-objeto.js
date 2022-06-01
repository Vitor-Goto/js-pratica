const obj = { a:1, b: 2, c: 3, soma() {return a + b + c }}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2 , c: 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2 ,"c": 3}'))

/* JSON parse deve ser aberto com aspas simples e suas variaveis
devem estar entre aspas duplas*/

console.log(JSON.parse('{"a": 1, "b": "whatsapp", "c": true, "d":{},"e":[] }'))
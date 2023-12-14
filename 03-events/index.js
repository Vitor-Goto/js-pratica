const EventEmitter = require("events")
class MeuEmissor extends EventEmitter {}
const meuEmissor = new MeuEmissor()
const nomeEvento = "usuario:click"
meuEmissor.on(nomeEvento, function (click) {
  console.log("usuario clicou", click)
})

// meuEmissor.emit(nomeEvento, "no ok")
// meuEmissor.emit(nomeEvento, "na barra")

const stdin = process.openStdin()
stdin.addListener("data", function (value) {
  console.log(`voce digitou: ${value.toString().trim()}  `)
})

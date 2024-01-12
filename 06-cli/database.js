const { readFile, writeFile } = require("fs")
const { stringify } = require("querystring")
const { promisify } = require("util")

const writeFileAsync = promisify(writeFile)
const readFileAsync = promisify(readFile)

class Database {
  constructor() {
    this.NOME_ARQUIVO = "heroes.json"
  }
  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, "utf8")
    return JSON.parse(arquivo.toString())
  }
  async escreverArquivo(dados) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
    return true
  }
  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivo()
    const id = heroi.id <= 2 ? heroi.id : Date.now()
    const heroiComid = {
      id,
      ...heroi,
    }
    const dadosFinal = [...dados, heroiComid]
    const resultado = await this.escreverArquivo(dadosFinal)
    return resultado
  }
  read() {
    return null
  }
  async listar(id) {
    const dados = await this.obterDadosArquivo()
    const dadosFiltrados = dados.filter((item) => (id ? item.id === id : true))
    return dadosFiltrados
  }
  async remover(id) {
    if (!id) {
      await this.escreverArquivo([])
    }
    const data = await this.obterDadosArquivo()
    const index = data.findIndex((item) => item.id === parseInt(id))
    if (index === -1) {
      throw Error("O usuario informado não existe")
    }
    data.splice(index, 1)
    return await this.escreverArquivo(data)
  }
  async atualizar(id, modificacoes) {
    const dados = await this.obterDadosArquivo()
    const indice = dados.findIndex((item) => item.id === parseInt(id))
    if (indice === -1) {
      throw Error("heroi nao existe")
    }
    const atual = dados[indice]
    const objetoAtualizar = {
      ...atual,
      ...modificacoes,
    }
    dados.splice(indice, 1)

    return await this.escreverArquivo([...dados, objetoAtualizar])

    return false
  }
}

module.exports = new Database()

const { deepEqual, ok } = require("assert")
const database = require("./database")
const DEFAULT_ITEM_CADASTRAR = {
  name: "flash",
  power: "speed",
  id: 1,
}

const DEFAULT_ITEM_ATUALIZAR = {
  nome: "batman",
  poder: "dinheiro",
  id: 2,
}
describe("suite de manipulação de herois", () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
  })
  it("deve pesquisar um heroi ", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [result] = await database.listar(expected.id)
    deepEqual(result, expected)
  })
  it("deve cadastrar um heroi.", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const result = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
    deepEqual(actual, expected)
  })
  it("deve pesquisar heroi por id", async () => {
    const expected = true
    const result = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
    deepEqual(result, expected)
  })
  it("deve atualizar um heroi", async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: "Batman2",
      poder: "dinheiro2",
    }
    const novoDado = {
      nome: "Batman2",
      poder: "dinheiro2",
    }
    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
    const [result] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
    deepEqual(result, expected)
  })
})

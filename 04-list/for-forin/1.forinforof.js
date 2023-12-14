const service = require("./service")

async function main() {
  try {
    const result = await service.getPeople("a")
    const names = []
    console.time("for")
    for (let i = 0; i <= result.results.length - 1; i++) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.log("nomes", names)
  } catch (error) {
    console.error("erro interno", error)
  }
}

main()

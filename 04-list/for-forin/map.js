const service = require("./service")
async function main() {
  try {
    const results = await service.getPeople("a")
  } catch (error) {
    console.error("deu erro", error)
  }
}

main()

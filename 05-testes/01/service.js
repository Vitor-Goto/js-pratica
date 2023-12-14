const { get } = require("axios")

const URL = "https://swapi.dev/api/people"

async function getPeople(name) {
  const url = `${URL}/?search=${name}`
  const response = await get(url)
  return response.data.results.map(mapPeople)
}

function mapPeople(item) {
  return {
    nome: item.name,
    peso: item.height,
  }
}

module.exports = {
  getPeople,
}

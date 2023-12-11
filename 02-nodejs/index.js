/*
    obter usuario
    obter telefone usuario
    obter endereco pelo id  
*/
const util = require("util")
const obterEnderecoAsync = util.promisify(getAddress)

function getUser() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        name: "random",
        age: new Date(),
      })
    }, 100)
  })
}

function getPhone(userId) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: "239812938",
        ddd: 27,
      })
    }, 200)
  })
}

function getAddress(userId) {}

main()
async function main() {
  try {
    const user = await getUser()
    // const phone = await getPhone(user.id)
    const data = await Promise.all([getUser(user.id)])
    const phone = data[0]
    console.log(
      `
      Nome: ${user.name},
      Telefone: (${phone.ddd} ${phone.telefone})
      `
    )
  } catch (error) {
    console.error(error)
  }
}
// const userPromise = getUser()
// userPromise
//   .then(function (user) {
//     return getPhone(user.id).then(function resolvePhone(result) {
//       return {
//         user: {
//           name: user.name,
//           id: user.id,
//         },
//         phone: result,
//       }
//     })
//   })
//   .then(function (data) {
//     console.log("resultado", data)
//   })
//   .catch(function (error) {
//     console.error("erro", error)
//   })

// getUser(function resolveUser(error, user) {
//   if (error) {
//     console.log("erro", error)
//     return
//   }
//   getPhone(user.id, function resolvePhone(error1, phone) {
//     if (error) {
//       console.log("erro", error)
//       return
//     }
//     console.log(`
//     Nome: ${user.name},
//     phone: (${phone.ddd}) ${phone.telefone}`)
//   })
// })
// const phone = getPhone()

// console.log("telefone", phone)

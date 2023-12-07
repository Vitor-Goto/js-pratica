/*
    obter usuario
    obter telefone usuario
    obter endereco pelo id  
*/

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: "random",
      age: new Date(),
    })
  }, 1000)
}

function getPhone(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "239812938",
      ddd: 27,
    })
  }, 2000)
}

function gerAddress(userId) {}
function resolveUser(error, user) {
  console.log("usuario", user)
}

getUser(function resolveUser(error, user) {
  if (error) {
    console.log("erro", error)
    return
  }
  getPhone(user.id, function resolvePhone(error1, phone) {
    if (error) {
      console.log("erro", error)
      return
    }
    console.log(`
    Nome: ${user.name},
    phone: (${phone.ddd}) ${phone.telefone}`)
  })
})
// const phone = getPhone()

// console.log("telefone", phone)

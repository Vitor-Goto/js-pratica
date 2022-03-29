//closure é o escopo criado quando Função é declarada (local onde foi declarada)
//esse escopo permite a função acessar e manipular variáveis externa à função

//contexto léxico em ação

const x =  'Global'

function fora(){
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
console.log(x)
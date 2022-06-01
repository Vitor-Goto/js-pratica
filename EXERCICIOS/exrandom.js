//fazer uma conversão de real para dolar,euro,libra e uma conversao das mesmas para  real

function EscolheMoedaOut(){

}

function EscolheMoedain (de_para) {
    moedaout = ''
    switch (de_para){
        case 'Dollar':
        moedaout = 'Dollar'
        break
    }
}


function converteMoeda(moedain, valorin){
    moedabase = 0
    let moedaout = EscolheMoeda(moedain)
    let valorout = 0
    if(moedaout == 'Dollar'){
        valorout = valorin * 5
    }
}

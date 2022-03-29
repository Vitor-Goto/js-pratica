/*17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:
plano       aumento
A            10% 
B            15% 
C            20% 

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function calculaAumento (plano, salarioAtual){
    switch(plano){
        case 'a':
            console.log(`você receberá ${ salarioAtual + (salarioAtual * 0.1)}` )
            break
        case 'b':
            console.log(`você recebera: ${salarioAtual + (salarioAtual * 0.2)}`) 
            break
        default:
            console.log('plano invalido')       
    }
}


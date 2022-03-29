/*13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch*/

let x = function(dia){

switch (dia) {
    case 1:
        console.log('Hoje é domingo')
        break;
    case 2:
        console.log('Hoje é segunda feira')
        break;
    case 3:
        console.log('Hoje é terça feira')
        break;
    case 4:
        console.log('Hoje é quarta feira')
        break;
    case 5:
        console.log('Hoje é quinta feira')
        break;
    case 6 :
        console.log('Hoje é sexta feira')
        break; 
    case 7:
        console.log('Hoje é sabado')
        break;        
    default:
        console.log('Dia Invalido')
        break;
}

}

x(8)
x(7)
x(3)
x(1)
x(5)
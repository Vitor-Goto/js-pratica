/*11) ​As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false*/

function classificaAnoBis (Ano){
    if(Ano == 0 ){
        return false
    }else if(Ano % 400 == 0){
        return true
    }else if (Ano % 100 == 0){
        return false
    }else if (Ano % 4 == 0){
        return true
    }    
}

function Clasifica(ano2){
    if(ano2 % 4 == 0){
        
    }
}

console.log(classificaAnoBis(400))
console.log(classificaAnoBis(0))
console.log(classificaAnoBis(100))
console.log(classificaAnoBis(804))




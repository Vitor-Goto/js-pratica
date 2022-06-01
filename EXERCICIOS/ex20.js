let nota100
let nota50
let nota20
let nota10
let nota5
let nota1


function saque (valorSaque){
    let cedula = calculaCedula (valorSaque)
    while (valorSaque >= cedula){
        switch(cedula){
            case 100:
                valorSaque -= 100
                nota100 ++
                break
            case 50:
                valorSaque -= 50
                nota50 ++
                break
            case 20:
                valorSaque -= 20
                nota20 ++
                break
            case 10:
                valorSaque -= 10
                nota10 ++
                break
             case 5:
                valorSaque -= 5
                nota5 ++
                break    
            case 1:
                valorSaque -= 1
                nota1 ++
                break
        }
        cedula = calculaCedula (valorSaque)
    }
    return resultado(nota100, nota50, nota20, nota10, nota5, nota1)
}

 function calculaCedula (valorSaque){  
        if (valorSaque >= 100){
            return 100
        }else if (valorSaque >= 50){
            return 50
        }else if(valorSaque >= 20){
            20
            return 20
        }else if (valorSaque >= 10){
            10
            return 10
        }else if (valorSaque >= 5){
            return 5
        }else if (valorSaque >= 1){
            return 1
        }
   
    
    }
     
 function resultado(nota100, nota50, nota20, nota10, nota5, nota1){
     numeroCedulas  = ' '
     if(nota100 > 0 ){
        numeroCedulas +=' total de notas de: ', nota100
     }
     if(nota50 > 0 ){
        numeroCedulas +=' total de notas de: ', nota50
     }
     if(nota20 > 0 ){
        numeroCedulas +=' total de notas de: ', nota20
     }
     if(nota10 > 0 ){
        numeroCedulas +=' total de notas de: ', nota10
     }   
     if(nota5 > 0 ){
        numeroCedulas +=' total de notas de: ', nota5
     }   
     if(nota1 > 0 ){
        numeroCedulas +=' total de notas de: ', nota1
     }   
return numeroCedulas


}


console.log(saque(350))
console.log(saque(894))
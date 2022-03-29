function comparaTriangulo (lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return 'equilatero'
    }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        return "escaleno"
    }else{
        return "isoseles"
    }
}

console.log(comparaTriangulo(3,3,3))
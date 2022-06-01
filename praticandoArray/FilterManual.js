Array.prototype.filter2 = function(call){
    const novaMatriz = []
    for (let i = 0 ; i < this.length; i++){
        if(call(this[i],i,this)){
            
        }

    }
}
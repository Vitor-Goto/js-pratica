
/*setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function() {
        console.log('Executando callback...')
        
        setTimeout(function() {
            console.log('Executando callback...')
            
        },2000)
    },2000)
}, 2000)*/

let p = new Promise(function(resolve){
    setTimeout(function() {
        console.log('Executando promise...')
        resolve()
    },2000)    
})

p.then()
p.then(()=> 3000)
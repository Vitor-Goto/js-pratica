//criando uma prototupe chain
Object.prototype.attr0 = '0'//pratica ruim gera impacto ao escopo global
const avo = {attr1:'1'}
const pai = {__proto__:avo, attr2: '2', attr3:'C'}
const filho = {__proto__:pai, attr3:'3'}
console.log(filho.attr0, filho.attr1,filho.attr2,filho.attr3, typeof Object.prototype)

const carro = {
    velAtual: 0,
    velMax:200,
    aceleraMais(delta){
        if(this.velAtual+ delta<=this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
   modelo:'F40',
   velMax:324 // shadowing, acontece pois ferrari -
   //esta sendo prototipada a partir do objeto carro
   
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())
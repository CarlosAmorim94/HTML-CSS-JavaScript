/*         Arays
*****************************/
let modelos = [
    'Palio',
    'Uno',
    'Astra',
    'Gol',
]

console.log(modelos[1])

let ingredientes = [
    ['uva','maça','laranja'],
    ['arroz','feijão']
]

console.log(ingredientes[1][0])

/*        Objects
***********************************/

let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso:'800kg',
    ligar: function() {
        console.log('VRUM VRUM!')
    }
}

console.log("Modelo: " + carro.modelo)
carro.ligar()
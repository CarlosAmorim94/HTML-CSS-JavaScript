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
    ligado: false,
    ligar: function() {
        this.ligado = true
        console.log('VRUM VRUM!')
    },
    acelerar: function() {
        if(this.ligado == true){
            console.log('Riiiiiihhihiih')
        } else {
            console.log(this.nome + " " + this.modelo + ' Não está ligado! ','Ligue o carro antes!')
        }
    }
}

console.log("Modelo: " + carro.modelo)

carro.ligar()
carro.acelerar()
/* __________________STRING_____________________*/

let nome = 'Carlos Amorim'

//Quantos caracteres um string tem?
let resultado1 = nome.length;
console.log(resultado1)

// Filtro "Carlos"
let resultado2 = nome.indexOf('Carlos')
console.log(resultado2)

//Filtro com if "Achou ou não achou?""
if (nome.indexOf('Carlos')> -1) {
    console.log('Achou!')
} else {
    console.log('Não achou!')
}

//Selecionar uma parte da string
let resultado3 = nome.slice(0, 4) // nome.substring(0, 4) tem o mesmo resultado, podendo ser numero negativo começando no fim da string
console.log(resultado3)

//Selecionar uma parte da string ##  MAIS USADO  ##
let resultado4 = nome.substr( 7 , 5 ) // 7 é inicio e X é a quantidade de caracteres
console.log(resultado4)

// Substituir partes da string
let resultado5 = nome.replace('Amorim', 'Vezza') // Substituir Amorim por Vezza
console.log(resultado5)

// transformar em MAIUSCULAS
let resultados6 = nome.toUpperCase()
console.log(resultado6)

//transformar em minusculas
let resultado7 = nome.toLocaleLowerCase()
console.log(resultado7)

//Eliminar espaços ínuteis '     '
let resultado8 = nome.trim()
console.log(resultado8)

// Saber qual caracter está na posição
let resultado9 = nome.charAt(3) // ou use (let resultado9 = nome[3])
console.log(resultado9)

// transformar uma string em array
let resultado10 = nome.split(' ') // onde encontrar o espaço ' ' ele transforma os caracteres entre ' ' em array
console.log(resultado10)

/* __________________NUMBER_____________________*/

let number = 10.5421643

//Transformar em string
let resposta = number.toString()
console.log(resposta)

//Transformar strings em numeros
let numero = '25.548'
let resposta2 = parseInt(numero) + 5
let resposta3 = parseFloat(numero) + 5
console.log(resposta2)
console.log(resposta3)

//Casas depois do ponto (casas decimais)
let resposta4 = number.toFixed(2) // quanto maior o parâmetro, mais casas após o ponto
console.log(resposta4)


/* __________________ARRAY_____________________*/

let lista = ['Ovo', 'Macarrão', 'Farinha', 'Arroz']
let lista2 = ['Presunto', 'Mussarela', 'Pão', 'Café']

// Transformar array em String
let res1 = lista.toString()
let res2 = lista.join('-') // O que estiver dentro do parâmetro será usado no meio dos itens da string
console.log(res1)
console.log(res2)

// Filtro dentro do Array
let res3 = lista.indexOf('Arroz')
console.log(res3)

// Remover o último item do array
lista.pop()
let res4 = lista
console.log(res4)

//Remover o primeiro  item do array
lista.shift()
let res5 = lista
console.log(res5)

// Adicionar um novo iten no array
lista.push('Feijão')
let res6 = lista
console.log(res6)

// Trocar um item na Array
lista[0] = 'Manteiga'  // Trocar 'Ovo' por 'Manteiga'
let res7 = lista
console.log(res7)

// Deletar um item do Array
lista.splice(1 , 1) // primeiro parametro é qual o item remover e parâmetro 2 são quantos itens quer remover
let res8 = lista
console.log(res8)

//Concatenar 2 arrays
let res9 = lista.concat(lista2)
console.log(res9)

// Oredenar o array em ordem alfabética A --> Z
lista.short()
let res10 = lista
console.log(res10)

// Oredenar o array em ordem alfabética Z --> A
lista.short()
lista.reverse() // Se não colocar o .short() ele vai reverter do jeito que está
let res11 = lista
console.log(res11)

// 
lista.short()
let res10 = lista
console.log(res10)
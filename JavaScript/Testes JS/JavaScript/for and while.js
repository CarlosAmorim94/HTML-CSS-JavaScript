/* FOR LOOP
*********************************/

let texto = ''

for (let i = 0; i <= 50; i++ ) {
    texto = texto + i + '<br/>'
}

document.getElementById("teste1").innerHTML = texto


/* FOR LOOP ARRAY
*********************************/

let carros = ['Celta','Ferrari','Gol','Astra','Corolla']

let html = '<ul>'

for (let i in carros) {
    html += '<li>'+ carros[i] +'</li>'
}

html += '</ul>'

document.getElementById("teste2").innerHTML = html


/* WHILE
********************************/

let html = ''
let c = 0

while  (c <= 10) {
    html += "Número: "+c+"<br/>"
    c++
}


document.getElementById("teste3").innerHTML = html


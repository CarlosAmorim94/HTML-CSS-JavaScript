function clicou() {
    alert('Você clicou no botão')
}

function trocarTexto() {
    document.getElementById("titulo").innerHTML = "Você alterou o texto!"
}

function passou() {
    alert('Entrou com o  mouse')
}

function saiu() {
    alert('Saiu com o  mouse')
}

function pressionou(e) {
    if(e.keyCode == 13){
        let texto = document.getElementById("campo").value
                
        console.log(texto)
    }
}

function vermelho() {
    limpar()
    document.getElementById("body").classList.add('red')
}

function azul() {
    limpar()
    document.getElementById("body").classList.add('blue')
}

function verde() {
    limpar()
    document.getElementById("body").classList.add('green')
}

function preto() {
    limpar()
    document.getElementById("body").classList.add('black')
}

function limpar() {
    document.getElementById("body").classList.remove('red')
    document.getElementById("body").classList.remove('blue')
    document.getElementById("body").classList.remove('green')
    document.getElementById("body").classList.remove('black')
}

function mostrar(elemento) {
    elemento.style.display = "none"
    document.getElementById('teAmo').style.display = "block"
}
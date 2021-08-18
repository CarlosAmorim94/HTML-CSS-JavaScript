function clicou() {
    let menuArea = document.getElementById("menu-area")

    if(menuArea.style.width == '200px') {
        menuArea.style.width = '0px'
    } else {
        menuArea.style.width = '200px'
    }
}

let dia = 15
let diaNome = ''

switch(dia) {
    case 1:
        diaNome = 'Segunda-Feira'
        break;
    case 2:
        diaNome = 'Terça-Feira'
        break;
    case 3:
        diaNome = 'Quarta-Feira'
        break;
    case 4:
        diaNome = 'Quinta-Feira'
        break;
    case 5:
        diaNome = 'Sexta-Feira'
        break;
    case 6:
        diaNome = 'Sábado'
        break;
    case 7:
        diaNome = 'Domingo'
        break;
    default:
        diaNome = 'Não é um número de semana'

}

document.getElementById('dia').innerHTML = diaNome
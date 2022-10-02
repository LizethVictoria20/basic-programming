//Opcion aleatoria del pc

function aleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Funcion de jugada
function eleccion(jugada) {
    let resultado = ''
    if(jugada == 1) {
        resultado = 'Piedra 🗿'
    }
    else if(jugada == 2) {
        resultado =  'Papel 📄'
    }
    else if(jugada == 3) {
        resultado =  'Tijeras ✄'
    }
    else {
        alert('Selecciona una opción correcta')
    }
    return resultado
}

let pc = 0
let jugador = 0
let triunfos = 0
let derrotas = 0
let empate = 0


while(triunfos < 2 && derrotas < 1) {
    pc = aleatoria(1,3)
    jugador = prompt('Selecciona 1 para piedra, 2 para papel, 3 para tijera.')

    alert('El pc eligio: ' + eleccion(pc))
    alert('Elegiste: ' + eleccion(jugador))

    //Combate
    if(jugador == pc) {
        alert('Empate')
        empate += 1
    }
    else if(jugador == 1 && pc == 3) {
        alert('Ganaste')
        triunfos += 1
    }
    else if(jugador == 2 && pc == 1) {
        alert('Ganaste')
        triunfos += 1
    }
    else if(jugador == 3 && pc == 2) {
        alert('Ganaste')
        triunfos += 1
    }
    else {
        alert('Perdiste')
        derrotas += 1
    }


}
alert('Ganaste ' + triunfos + ' veces. Perdiste ' + derrotas + ' veces.Y empataste ' + empate + ' veces')








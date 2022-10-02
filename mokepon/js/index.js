let ataqueJugador;
let ataqueEnemigo;


function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('button-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMarcotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

     ataqueJugador = document.getElementById('ataque-jugador')
     ataqueEnemigo = document.getElementById('ataque-enemigo')

}

//Aleatorio
function aleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMarcotaJugador() {

    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(hipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }
    else if(capipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    }
    else if(ratigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }
    else {
        alert('Debes seleccionar a tu mascota')
    }
    seleccionarMascotaEnemigo()
    
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatoria(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        //Hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }
    else if (mascotaAleatoria == 2) {
        //Capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }
    else {
        //Ratigueya
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador.innerHTML = 'FUEGO'
    ataquAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador.innerHTML = 'AGUA'
    ataquAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador.innerHTML = 'TIERRA'
    ataquAleatorioEnemigo()
}


function ataquAleatorioEnemigo() {
    //  1.FUEGO - 2.AGUA - 3-TIERRA
    let ataque = aleatoria(1, 3)
    
    if (ataque == 1) {
        ataqueEnemigo.innerHTML = 'FUEGO'
    }
    else if (ataque == 2) {
        ataqueEnemigo.innerHTML = 'AGUA'
    }
    else {
        ataqueEnemigo.innerHTML = 'TIERRA'
    }
}


window.addEventListener('load', iniciarJuego)
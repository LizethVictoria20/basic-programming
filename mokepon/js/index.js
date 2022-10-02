let botonMascotaJugador = document.getElementById('button-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMarcotaJugador)


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
    let ataqueAleatorio = aleatoria(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        //Hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }
    else if (ataqueAleatorio == 2) {
        //Capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }
    else {
        //Ratigueya
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function aleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


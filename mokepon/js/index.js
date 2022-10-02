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
}

let botonMascotaJugador = document.getElementById('button-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMarcotaJugador)


let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3
let vidasEnemigo = 3


let mokepones = []


class Mokepon {
    constructor(name, avatar, life) {
        this.name = name,
        this.avatar = avatar
        this.life = life
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)


mokepones.push(hipodoge)
console.log(mokepones)

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'


    let botonMascotaJugador = document.getElementById('button-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)


    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Aleatorio
function aleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

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
    let mascotaAleatoria = obtenerNombreMascota()
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    spanMascotaEnemigo.innerHTML = mascotaAleatoria
}

function obtenerNombreMascota() {
    let mascotaAleatoria = aleatoria(1, 3)

    if (mascotaAleatoria == 1) {
        //Hipodoge
        return 'Hipodoge'
    }
    else if (mascotaAleatoria == 2) {
        //Capipepo
        return 'Capipepo'
    }
    else {
        //Ratigueya
        return 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataquAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataquAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataquAleatorioEnemigo()
}


function ataquAleatorioEnemigo() {
    //  1.FUEGO - 2.AGUA - 3-TIERRA
    let ataque = aleatoria(1, 3)

    if (ataque == 1) {
        ataqueEnemigo = 'FUEGO'
    }
    else if (ataque == 2) {
        ataqueEnemigo = 'AGUA'
    }
    else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function crearMensaje(resultado) {
    let sectionMensaje = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataques-del-jugador')
    let ataqueDelEnemigo = document.getElementById('ataques-del-enemigo')
    
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}


function mensajeFinal(resultado) {
    let sectionMensaje = document.getElementById('resultado')

    sectionMensaje.innerHTML = resultado + obtenerNombreMascota()

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true


    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}


function combate() {
    //Vidas jugadores
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    //Combate
    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATE')
    }
    else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    }
    else {
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

//¿Vives o mueres?
function revisarVidas() {
    if(vidasJugador == 0) {
        mensajeFinal('PERDISTE contra ')
    }
    else if(vidasEnemigo == 0) {
        mensajeFinal('GANASTE contra ')
    }
}

function reiniciarJuego() {
    location.reload()
}





window.addEventListener('load', iniciarJuego)
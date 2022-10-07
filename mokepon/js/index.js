const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('button-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataques-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataques-del-enemigo')
let botonReiniciar = document.getElementById('boton-reiniciar')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas-mascotas')


let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3
let vidasEnemigo = 3
let opcionDeMokepones;


let mokepones = []

class Mokepon {
    constructor(name, avatar, life) {
        this.name = name,
        this.avatar = avatar,
        this.life = life,
        this.ataques = []
    }
}

//Objetos de instancia que llegan desde la clase
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)


//Objetos literales no hacen parte de una clase y se envia la información con sus propiedades y atributos
hipodoge.ataques.push(
    {name: 'Agua 💧', id: 'boton-agua'},
    {name: 'Agua 💧', id: 'boton-agua'},
    {name: 'Agua 💧', id: 'boton-agua'},
    {name: 'Fuego 🔥', id: 'boton-fuego'},
    {name: 'Tierra ☘️', id: 'boton-tierra'} 
)

capipepo.ataques.push(
    {name: 'Tierra ☘️', id: 'boton-tierra'},
    {name: 'Tierra ☘️', id: 'boton-tierra'},
    {name: 'Tierra ☘️', id: 'boton-tierra'},
    {name: 'Agua 💧', id: 'boton-agua'},
    {name: 'Fuego 🔥', id: 'boton-fuego'}
)

ratigueya.ataques.push(
    {name: 'Fuego 🔥', id: 'boton-fuego'},
    {name: 'Fuego 🔥', id: 'boton-fuego'},
    {name: 'Fuego 🔥', id: 'boton-fuego'},
    {name: 'Agua 💧', id: 'boton-agua'},
    {name: 'Tierra ☘️', id: 'boton-tierra'}
)

mokepones.push(hipodoge, capipepo, ratigueya)


function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.map((mokepon) => {
        opcionDeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.name} />
            <label class="tarjetas-de-pokemon" for=${mokepon.name}>
                <p>${mokepon.name}</p>
                <img src=${mokepon.avatar} alt=${mokepon.name}>
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })


    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Aleatorio
function aleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
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
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}


function mensajeFinal(resultado) {
    sectionMensaje.innerHTML = resultado + obtenerNombreMascota()
    botonFuego.disabled = true
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}


function combate() {
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
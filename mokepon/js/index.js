const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('button-mascota')
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
const contenedorAtaques = document.getElementById('contenedor-ataques')

let inputHipodoge; 
let inputCapipepo; 
let inputRatigueya; 

let botonFuego;
let botonAgua;
let botonTierra;
let botones = []

let ataqueJugador = []
let ataqueEnemigo = []
let vidasJugador = 3
let vidasEnemigo = 3
let opcionDeMokepones;
let botonesAtaques;
let ataquesMokeponEnemigo;

let mascotaJugador;


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
    sectionReiniciar.style.display = 'none'

    mokepones.map((mokepon) => {
        opcionDeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.name} />
            <label class="tarjetas-de-pokemon" for=${mokepon.name}>
                <p>${mokepon.name}</p>
                <img src=${mokepon.avatar} alt=${mokepon.name}>
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    })


    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Aleatorio
function aleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    
    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }
    else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }
    else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        //MascotaJugador guarda el nombre de la mascota
        mascotaJugador = inputRatigueya.id
    }
    else {
        alert('Debes seleccionar a tu mascota')
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
    
}

function extraerAtaques(mascotaJugador) {
    let ataques
    //Recorre el arreglo where are save all the information about Mokepones
    for (let i = 0; i < mokepones.length; i++) {
        //Extrae the mokemone's attack.
        if (mascotaJugador === mokepones[i].name) {
            ataques = mokepones[i].ataques
        }    
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.map((ataque) => {
        //Recorre el arreglo and extract the attacks. Create a button for each attack
        botonesAtaques = `
        <button id=${ataque.id} class="boton-de-ataque boton-ataque">${ataque.name}</button>
        `
        contenedorAtaques.innerHTML += botonesAtaques
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')

    //Selecionar todos los elementos que compartan la misma clase
    //Se deben de obtener todos los botones para asi poder agregarle un evento de click a todos los botones que se crean
    botones = document.querySelectorAll('.boton-ataque')
}

function secuenciaAtaque() {
    //Por cada boton que exista se le agrega un evento click y asi validar que boton se está seleccionando
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if(e.target.textContent === 'Fuego 🔥') {
                ataqueJugador.push('Fuego 🔥')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            else if(e.target.textContent === 'Agua 💧') {
                ataqueJugador.push('Agua 💧')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            else {
                ataqueJugador.push('Tierra ☘️')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            ataquAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatoria(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML =  mokepones[mascotaAleatoria].name
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataquAleatorioEnemigo() {
    //  1.FUEGO - 2.AGUA - 3-TIERRA
    let ataqueAleatorio = aleatoria(0, ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    }
    else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
        ataqueEnemigo.push('AGUA')
    }
    else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
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
    sectionMensaje.innerHTML = resultado
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
        mensajeFinal('CONGRATULATION ')
    }
    else if(vidasEnemigo == 0) {
        mensajeFinal('LOSER ')
    }
}

function reiniciarJuego() {
    location.reload()
}





window.addEventListener('load', iniciarJuego)
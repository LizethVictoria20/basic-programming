let pc = 2;
let jugador = 2;

jugador = prompt('Selecciona 1 para piedra, 2 para papel, 3 para tijera.')

//Opciones del jugador
if(jugador == 1) {
    alert('El jugador eligio 🗿')
}
else if(jugador == 2) {
    alert('El jugador eligio 📄')
}
else if(jugador == 3) {
    alert('El jugador eligio ✄')
}
else {
    alert('Selecciona una opción correcta')
}

//Opciones del pc
if(pc == 1) {
    alert('El pc eligio 🗿')
}
else if(pc == 2) {
    alert('El pc eligio 📄')
}
else if(pc == 3) {
    alert('El pc eligio ✄')
}
else {
    alert('Selecciona una opción correcta')
}


//Combate
if(jugador == pc) {
    alert('Empate')
}
else if(jugador == 1 && pc == 3) {
    alert('Ganaste')
}
else if(jugador == 2 && pc == 1) {
    alert('Ganaste')
}
else if(jugador == 3 && pc == 2) {
    alert('Ganaste')
}
else {
    alert('Perdiste')
}
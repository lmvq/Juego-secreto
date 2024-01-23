let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 20;
let maximoIntentos = 3;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acepto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','Numero secreto es menor');
        }else {
            asignarTextoElemento('p','Numero secreto mayor');
        } 
        intentos++;
        limpiarCaja(); 
    } if (intentos > maximoIntentos) {
    asignarTextoElemento('p',`Llegaste al maximo de intentos ${maximoIntentos} intentos`);
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todo los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya sortamos todos los numeros posibles');
    } else {
    //si el numero generado esta incluido en la listo
        if (listaNumerosSorteados.includes      (numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    // indicar  mensaje de intervalo
    // general el numero aleatorio
    //inicializar el numero de intentos
   condicionesIniciales(); 
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
}

condicionesIniciales();
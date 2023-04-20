//Inicializador de Variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 3;
let timerInicial = timer;
let tiempoReg = null;

//Inicializar sonidos
let sonidoAcierto = new Audio('sounds/Acierto.wav');
let sondioEleccion = new Audio('sounds/Eleccion.wav');
let sonidoError = new Audio('sounds/Error.wav');
let sonidoVictoria = new Audio('sounds/Ganaste.wav');
let sonidoDerrota = new Audio('sounds/Perder.wav');

// let musica = new Audio('Calla mora.mp3');
//Apuntando a Documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

//Generacion de Numeros Aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random() - 0.5});
console.log(numeros);

//Funcion Principal
function contarTiempo(){

    tiempoReg = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            sonidoDerrota.play();
            clearInterval(tiempoReg);
            bloquearTarjetas();
            mostrarTiempo.innerHTML = `Tiempo: ${timer}<hr> JAJA PERDISTE POR TIEMPO XDDDDD`;
        }
        
    }, 1000);
    
    
};
function bloquearTarjetas(){
    for(let i = 0; i<=15; i++){
        let tarjetaBloquedada = document.getElementById(i);
        tarjetaBloquedada.innerHTML = 'Q NUB';
        tarjetaBloquedada.disabled = true;
    }
}
function Destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    tarjetasDestapadas++;
    
    if(tarjetasDestapadas == 1){
        //Mostrar Primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = numeros[id];
        sondioEleccion.play();

        //Deshabilitar boton
        tarjeta1.disabled = true;

    }else if(tarjetasDestapadas == 2){
        //Mostrar Segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = numeros[id];

        tarjeta2.disabled = true;

        //Incrementar Movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            //Resetar contador de tarjetas destapadas
            tarjetasDestapadas = 0;
            sonidoAcierto.play();

            //Aumentar Aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;


            if(aciertos == 8){
                clearInterval(tiempoReg);
                mostrarAciertos.innerHTML = `Aciertos:${aciertos} <hr> 🎉Has Ganado!!🎉`;
                mostrarMovimientos.innerHTML = `Has hecho un total de ${movimientos} movimientos en esta partida! 😎`;
                mostrarTiempo.innerHTML = `Has demorado ${timerInicial - timer} segundos! ⏱️`;
                sonidoVictoria.play();
            }
        }else{
            sonidoError.play()
            //mostrar momentaneamente valores y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },800);
        }
        
    }
    

} 

//Inicializador de Variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;

//Apuntando a Documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');

//Generacion de Numeros Aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random() - 0.5});
console.log(numeros);

//Funcion Principal

function Destapar(id){
    tarjetasDestapadas++;
    
    if(tarjetasDestapadas == 1){
        //Mostrar Primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = numeros[id];

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

            //Aumentar Aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos:${aciertos}`;
        }else{
            //mostrar momentaneamente valores y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },1000);
        }
        
    }
    

} 

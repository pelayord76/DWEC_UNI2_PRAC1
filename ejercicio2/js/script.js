const MAXIMO = 99999;
const MINIMO = 0;
const MAXINTENTOS = 999999;
var encontrado = false;
var ganador;

var numeroDeDecimos = parseInt(prompt("numero de decimos a generar:"));
while (isNaN.numeroDeDecimos || numeroDeDecimos != parseInt(numeroDeDecimos) || numeroDeDecimos <= 0) {
    numeroDeDecimos = parseInt(prompt("numero de decimos a generar, intriduce un numero entero y positivo:"));
}
var decimos = generaNAleatorios(numeroDeDecimos, MINIMO, MAXIMO);

var contador = 0;
while (!encontrado && contador < MAXINTENTOS) {
    let numero = generarAleatorio(MINIMO, MAXIMO);
    for (let i = 0; i < decimos.length; i++) {
        
        if (decimos[i] === numero) {
            encontrado = true;
            ganador = decimos[i];
            console.log("ganador: " + ganador);
        }
    }
    contador++;
}

function generarAleatorio(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

function generaNAleatorios(cantidad, max, min) {
    let resultado = [];
    for (let i = 0; i < cantidad; i++) {
        resultado[i] = generarAleatorio(min, max);
    }
    console.log("decimos: " + resultado);
    return resultado;
}


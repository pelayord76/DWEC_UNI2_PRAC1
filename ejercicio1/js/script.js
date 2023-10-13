var texto = prompt("Escribe un texto:");
texto = separaPalabras(texto);
console.log(giraPalabras(texto));

while (texto != "ESC") {
    var texto = prompt("Escribe un texto:");
    if (texto === "ESC");
    else {
        texto = separaPalabras(texto);
        console.log(giraPalabras(texto));
    }
}

function separaPalabras(texto) {
    texto = texto.split(" ");
    return texto;
}

function giraPalabras(texto) {

    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let separar = texto[i].split("");
        let invertir = separar.reverse();
        let unir = invertir.join("");
        resultado += unir + " ";
    }

    return resultado;
}
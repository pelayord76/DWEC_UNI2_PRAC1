const EQUIPOS = ["R. Madrid", "Barcelona", "Atlético", "Valencia", "Athletic", "Sevilla", "Espanyol", "R. Sociedad", "Betis", "Zaragoza", "Celta", "Deportivo", "Valladolid", "Osasuna", "Racing Sant.", "Sporting", "Villarreal", "Mallorca", "Oviedo", "Las Palmas"];
const SIMBOLO = ["1", "X", "2"];

function generaSimbolo() {
    let i = Math.floor(Math.random() * SIMBOLO.length);
    return SIMBOLO[i];
}

function muestraEquipos(equipos) {
    console.table(equipos);
}

function generaResultados(quinielas) {
    let numEquipos = quinielas.length;
    for (let i = 0; i < numEquipos; i++) {
        for (let j = 0; j < numEquipos; j++) {
            if (i !== j) {
                quinielas[i][j] = generaSimbolo();
            }
        }
    }
}

function muestraDatos(equipos, quinielas) {
    let continuar = true;

    while (continuar) {
        let local = prompt("Introduce el nombre del equipo local:");
        let visitante = prompt("Introduce el nombre del equipo visitante:");

        if (equipos.includes(local) && equipos.includes(visitante)) {
            let iLocal = equipos.indexOf(local);
            let iVisitante = equipos.indexOf(visitante);
            console.log(equipos[iLocal] + " vs " + equipos[iVisitante] + " = " + quinielas[iLocal][iVisitante]);

        }
        else {
            console.log("Esos dos equipos no existen, revisa la tabla para ver los nombres.");
        }

        let respuesta = prompt("¿Desea ver otro resultado? (si/no)").toLowerCase();
        if(respuesta === "no") {
            continuar = false;
        }
    }
}

function quinielas(equipos) {
    let numEquipos = equipos.length;

    let quinielas = new Array(numEquipos);
    for (let i = 0; i < numEquipos; i++) {
        quinielas[i] = new Array(numEquipos).fill('');
    }

    generaResultados(quinielas);
    muestraEquipos(equipos);
    console.table(quinielas);
    muestraDatos(equipos, quinielas);
}

quinielas(EQUIPOS);

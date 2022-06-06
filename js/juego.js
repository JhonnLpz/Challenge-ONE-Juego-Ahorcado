
let local = localStorage.getItem('Palabras Agregadas');

let campoDibujo = document.querySelector(".canvasAhorcado");
let palabras = JSON.parse(local);
let intentos = 0;
let palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];
let palabraEscogida = [];
let campoAciertos = document.querySelector(".palabra");
let campoFallos = document.querySelector(".fallos");
const letrasFalladas = [];
let intentosFallidos = 0;

let modalPerdiste = document.querySelector(".modalPerdiste")

palabraEscogida.push(palabraRandom);

function cerrarModal() {

    modalPerdiste.style.display = "none";
    modalPerdiste.classList.remove("active");
}
function letraTeclado(palabra) {

    let letra = palabra;

    //validacion palabras
    if (palabraEscogida[0].includes(letra)) {
        // alert("bien");//provisional
        campoAciertos.innerHTML = 7;
    } else {

        if (letrasFalladas.includes(letra)) {

            alert("ya usaste esta letra");//cambiar por modal

        }
        letrasFalladas.push(letra)
        campoFallos.innerHTML = letrasFalladas;
    }

    intentos++;
    intentosFallidos++
    switch (intentos) {
        case 1:
            document.querySelector(".soporte1").style = "flex";
            break;
        case 2:
            document.querySelector(".soporte2").style = "flex";
            break
        case 3:
            document.querySelector(".cuerda").style = "flex";
            break
        case 4:
            document.querySelector(".cabeza").style = "flex";
            break;
        case 5:
            document.querySelector(".tronco").style = "flex";
            break
        case 6:
            document.querySelector(".brazoDer").style = "flex";
            break
        case 7:
            document.querySelector(".brazoIzq").style = "flex";
            break;
        case 8:
            document.querySelector(".piernaIzq").style = "flex";
            break
        case 9:
            document.querySelector(".piernaDer").style = "flex";
            break

        default:
            document.querySelectorAll(".tablero").style = "none";
            break;
    }
    if (intentosFallidos >= 9) {

        modalPerdiste.style = "flex";
        modalPerdiste.classList.add("active");
        document.querySelector("#textoGameOver").innerHTML = `La Palabra secreta era : <strong>${palabraEscogida[0]}</strong> `

        campoFallos.classList.add("gameOver");

        campoFallos.innerHTML = "Perdiste ! intentalo de nuevo dando click en el botón reiniciar :)";
    }
}

console.log(palabraEscogida[0]);
campoAciertos.innerHTML = "_".repeat(palabraEscogida[0].length);

//logica Dibujo

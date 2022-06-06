
let arrayPalabras = ["alura", "oracle", "internet"];
// let local = localStorage.getItem('Palabras Agregadas');
let inputAgregar = document.querySelector(".agregar");
let modalAgregar = document.querySelector(".modal");
let modalError = document.querySelector(".modalError");
let modalExito = document.querySelector(".modalExito");
let modalRepeticion = document.querySelector(".modalRepeticion")
// let btnAgregar = document.querySelector(".btnAgregar");
let btnCerrar = document.querySelector(".btnCerrar");

function validarTexto(texto) {
    var salida = '';
    //añadiendo las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';
    //ciclo donde revisa cada letra que se ingresa
    for (var i = 0; i < texto.length; i++)
        //si el valor es diferente de  -1 (osea que es texto)
        //retorna la letra normal
        if (filtro.indexOf(texto.charAt(i)) != -1)
            salida += texto.charAt(i);
    //si no se cumple retorna salida(salida = "")
    return salida;
}
modalAgregar.style.display = "none";

function cerrarModal() {

    modalAgregar.style.display = "none";
    modalError.style.display = "none";
    modalExito.style.display = "none";
    modalRepeticion.style.display = "none";

    modalError.classList.remove("active");
    modalExito.classList.remove("active");
    modalRepeticion.classList.remove("active");

    inputAgregar.value = "";
    inputAgregar.focus();
}

function almacenar() {

    if (   inputAgregar.value <= 0
        || inputAgregar.value == " "
        || (inputAgregar.value).length == 1
        || (inputAgregar.value).length > 10 ) {

        modalError.style.display = "flex";
        modalAgregar.style.display = "flex";
        modalError.classList.add("active");

    } else {

        if (arrayPalabras.find(palabra => palabra === inputAgregar.value)) {

            modalRepeticion.style.display = "flex";
            modalAgregar.style.display = "flex";
            modalRepeticion.classList.add("active");
        } else {

            modalExito.style.display = "flex";
            modalAgregar.style.display = "flex";
            modalExito.classList.add("active");

            arrayPalabras.push(inputAgregar.value);

            localStorage.setItem('Palabras Agregadas', JSON.stringify(arrayPalabras));
        }
    }

}
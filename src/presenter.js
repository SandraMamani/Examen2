import Juego from "./convertirCodigoSecreto.js";

const codigo_imput = document.querySelector("#codigosecreto");
const form = document.querySelector("#Juego-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#contar");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const jugar = new Juego();
    const codigosecreto= jugar.convertirCodigoSecreto(codigo_imput.value);
    const contar = jugar.contarCantidadDeDigitos(codigo_imput.value);
    div.innerHTML = "<p>" + codigosecreto + "</p>";
    div2.innerHTML = "<p>" + "Cantidad de Digitos:" + contar + "</p>";
});
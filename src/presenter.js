import convertirCodigoSecreto from "./convertirCodigoSecreto.js";

const codigo_imput = document.querySelector("#codigosecreto");
const form = document.querySelector("#Juego-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const codigosecreto= convertirCodigoSecreto(codigo_imput.value);
    div.innerHTML = "<p>" + codigosecreto + "</p>";
    
  });
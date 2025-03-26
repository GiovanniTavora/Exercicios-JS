import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.addEventListener("DOMContentLoaded", () => {
  const paragrafo = document.getElementById("meuParagrafo");
  const botaoTexto = document.getElementById("botaoTexto");

  const numeros = [1, 2, 3, 4, 5];
  const botaoMultiplica = document.getElementById("botaoMultiplica");
  const numerosOriginais = document.getElementById("numerosOriginais");
  const numerosMultiplicados = document.getElementById("numerosMultiplicados");

  botaoTexto.addEventListener("click", () => {
    paragrafo.innerText = "Agora o texto foi alterado!"
  });

  botaoMultiplica.addEventListener("cick", () => {

  });
});



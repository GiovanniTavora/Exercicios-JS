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

  numerosOriginais.innerText = `Array original: ${numeros.join(", ")}`;

  botaoTexto.addEventListener("click", () => {
    paragrafo.innerText = "Agora o texto foi alterado!"
  });

  if (numerosOriginais && numerosMultiplicados && botaoMultiplica) {
    numerosOriginais.innerText = `Array original: ${numeros.join(", ")}`;
    
    botaoMultiplica.addEventListener("click", () => {
        const resultado = numeros.map(num => num * 2);
        numerosMultiplicados.innerText = `Array multiplicado: ${resultado.join(", ")}`;
    });
  }



});



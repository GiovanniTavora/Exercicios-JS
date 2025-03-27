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

  const numerosFiltro = [5, 8, 12, 19, 3, 25, 7, 15];
  const numerosOriginaisFilter = document.getElementById("numerosOriginaisFilter");
  const numerosFiltrados = document.getElementById("numerosFiltrados");
  const botaoFiltrar = document.getElementById("botaoFiltrar");

  const numerosSomados = document.querySelector("#numerosSomados");
  const botaoSoma = document.querySelector("#botaoSoma");

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

  if(botaoSoma && numerosSomados){
    botaoSoma.addEventListener("click", () => {
      const soma = numeros.reduce((total, num) => total + num, 0);
      numerosSomados.innerText = `Soma dos números: ${soma}`
    });
  }

  if (numerosOriginaisFilter && numerosFiltrados && botaoFiltrar) {
    numerosOriginaisFilter.innerText = `Array original: ${numerosFiltro.join(", ")}`;

    botaoFiltrar.addEventListener("click", () => {
      const resultado = numerosFiltro.filter(num => num > 10);
      numerosFiltrados.innerText = `Números maiores que 10: ${resultado.join(", ")}`;
    });
  }

});


